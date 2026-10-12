import { Activity, ShieldCheck, Sun, TrendingDown } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      icon: Activity,
      value: '1 200 ha',
      label: 'Couverture cartographique / jour',
      sub: 'Surveillance haute résolution',
    },
    {
      icon: TrendingDown,
      value: '-65 %',
      label: "D'intrants chimiques utilisés",
      sub: 'Pulvérisation micrométrique ciblée',
    },
    {
      icon: ShieldCheck,
      value: '98,4 %',
      label: 'Précision de détection IA',
      sub: 'Maladies foliaires & anomalies',
    },
    {
      icon: Sun,
      value: '100 %',
      label: 'Autonome en énergie solaire',
      sub: 'Station de recharge au sol',
    },
  ];

  return (
    <section className="stats-bar-section">
      <div className="container">
        <div className="stats-bar-grid">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="stats-bar-item">
                <div className="stats-bar-icon-wrap">
                  <Icon size={20} />
                </div>
                <div className="stats-bar-content">
                  <span className="stats-bar-value">{stat.value}</span>
                  <strong className="stats-bar-label">{stat.label}</strong>
                  <small className="stats-bar-sub">{stat.sub}</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
