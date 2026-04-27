<template>
  <div class="page">
    <div class="content">
      <header class="page-header">
        <span class="label">Fitness</span>
        <p class="subtitle">Tracking lifts, weight, and cardio over time.</p>
      </header>

      <!-- Lifting PRs -->
      <section class="section">
        <h2 class="section-title">Lifting PRs</h2>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Lift</th>
                <th>Weight</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="pr in liftingPRs" :key="pr.lift">
                <td>{{ pr.lift }}</td>
                <td class="accent">{{ pr.weight }} {{ pr.unit }}</td>
                <td class="muted">{{ formatDate(pr.date) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Body Weight -->
      <section class="section">
        <h2 class="section-title">Body Weight</h2>
        <div class="chart-wrap">
          <Line :data="weightChartData" :options="lineChartOptions" />
        </div>
      </section>

      <!-- Cardio -->
      <section class="section">
        <h2 class="section-title">Cardio</h2>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Distance</th>
                <th>Time</th>
                <th>Pace</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="entry in cardioLog" :key="entry.date">
                <td class="muted">{{ formatDate(entry.date) }}</td>
                <td>{{ entry.distance }} {{ entry.unit }}</td>
                <td class="accent">{{ entry.time }}</td>
                <td class="muted">{{ entry.pace ?? '—' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Workout Log -->
      <section class="section">
        <h2 class="section-title">Workout Log</h2>
        <div class="log-list">
          <div v-for="entry in workoutLog" :key="entry.date" class="log-entry">
            <div class="log-meta">
              <span class="log-date">{{ formatDate(entry.date) }}</span>
              <span class="log-type">{{ entry.type }}</span>
            </div>
            <p class="log-notes">{{ entry.notes }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js';
import { liftingPRs, bodyWeightLog, cardioLog, workoutLog } from '@/utils/fitnessData';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

export default defineComponent({
  name: 'FitnessPage',
  components: { Line },
  setup() {
    function formatDate(d: string) {
      return new Date(d).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC',
      });
    }

    const weightChartData = computed(() => ({
      labels: bodyWeightLog.map((e) => {
        const d = new Date(e.date);
        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
      }),
      datasets: [
        {
          data: bodyWeightLog.map((e) => e.weight),
          borderColor: '#3B82F6',
          backgroundColor: 'rgba(59,130,246,0.08)',
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: '#3B82F6',
        },
      ],
    }));

    const lineChartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          ticks: { color: '#6B7280', font: { size: 11 } },
          grid: { color: '#2A2A2A' },
        },
        y: {
          ticks: {
            color: '#6B7280',
            font: { size: 11 },
            callback: (v: number | string) => `${v} lbs`,
          },
          grid: { color: '#2A2A2A' },
        },
      },
    };

    return { liftingPRs, bodyWeightLog, cardioLog, workoutLog, weightChartData, lineChartOptions, formatDate };
  },
});
</script>

<style scoped>
.page {
  padding-top: 56px;
  min-height: 100vh;
}

.content {
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.page-header {
  margin-bottom: 3.5rem;
}

.label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  display: block;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.1rem;
  color: var(--muted);
  margin: 0;
}

.section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1.25rem;
}

.table-wrap {
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

.data-table th {
  text-align: left;
  padding: 0.75rem 1rem;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  background: #111;
  border-bottom: 1px solid var(--border);
}

.data-table td {
  padding: 0.875rem 1rem;
  color: var(--text);
  border-bottom: 1px solid var(--border);
}

.data-table tr:last-child td {
  border-bottom: none;
}

.data-table tr:hover td {
  background: #1e1e1e;
}

.accent {
  color: var(--accent) !important;
  font-weight: 500;
}

.muted {
  color: var(--muted) !important;
}

.chart-wrap {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  max-height: 280px;
}

.log-list {
  display: flex;
  flex-direction: column;
  gap: 1px;
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}

.log-entry {
  background: var(--surface);
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--border);
}

.log-entry:last-child {
  border-bottom: none;
}

.log-meta {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 0.35rem;
}

.log-date {
  font-size: 0.75rem;
  color: var(--muted);
}

.log-type {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent);
}

.log-notes {
  font-size: 0.825rem;
  color: var(--muted);
  margin: 0;
  line-height: 1.5;
}
</style>
