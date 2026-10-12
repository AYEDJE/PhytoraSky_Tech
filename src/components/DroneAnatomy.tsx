import { useState } from 'react';
import { Cpu, Eye, Gauge, Shield, Sun, Droplets, BatteryCharging, Navigation } from 'lucide-react';
import { SectionTitle } from '@/components/Shared';

interface Subsystem {
  id: string;
  name: string;
  shortName: string;
  icon: typeof Eye;
  category: string;
  specs: string;
  description: string;
  points: string[];
}

const subsystems: Subsystem[] = [
  {
    id: 'vision',
    name: 'Système Optique & Thermographique',
    shortName: 'Vision & Capteurs',
    icon: Eye,
    category: 'Télédétection IA',
    specs: '4K RGB + Capteur thermique FLIR · Zoom optique 10x',
    description: 'Double capteur synchronisé permettant l\'analyse spectrale de la canopée pour détecter le stress hydrique et les départs de feu de brousse à plus de 2 km.',
    points: [
      'Calcul en vol de l\'indice NDVI (santé végétale)',
      'Détection thermique des feux cachés sous la canopée',
      'Cartographie orthophotographique géoréférencée',
    ],
  },
  {
    id: 'spray',
    name: 'Unité de Pulvérisation Ultra-Ciblée',
    shortName: 'Pulvérisation',
    icon: Droplets,
    category: 'Action mécanique',
    specs: 'Réservoir 16 Litres · Buses centrifuges électrostatiques',
    description: 'Ne pulvérise que là où l\'IA a formellement diagnostiqué un foyer d\'infection, réduisant drastiquement le gaspillage et l\'exposition des cultivateurs.',
    points: [
      'Gouttelettes micrométriques (130-250 µm) anti-dérive au vent',
      'Débit variable asservi à la vitesse sol du drone',
      'Économie de plus de 60 % de produits phytosanitaires',
    ],
  },
  {
    id: 'ai',
    name: 'Module IA Embarqué (Edge Computing)',
    shortName: 'Intelligence Edge',
    icon: Cpu,
    category: 'Cœur algorithmique',
    specs: 'NPU basse consommation · Modèle de vision CNN offline',
    description: 'Traitement en temps réel des flux vidéo directement sur le drone sans nécessiter de connexion internet 4G/5G, crucial pour les zones agricoles rurales togolaises.',
    points: [
      'Classification des ravageurs et maladies en moins de 80 ms',
      'Alerte et marquage GPS immédiat des foyers d\'infestation',
      'Navigation autonome évitant les obstacles et arbres isolés',
    ],
  },
  {
    id: 'solar',
    name: 'Station d\'Accueil Solaire Autonome',
    shortName: 'Énergie Solaire',
    icon: Sun,
    category: 'Énergie renouvelable',
    specs: 'Panneaux solaires bifaciaux 400W · Batteries LiFePO4',
    description: 'Base de déploiement installée au bord des parcelles permettant la recharge automatique et le stockage sécurisé sans recours au réseau électrique national.',
    points: [
      'Recharge rapide sécurisée en moins de 35 minutes',
      'Résistance tout-temps aux intempéries tropicales',
      'Point relais de télémesure et sauvegarde des vols',
    ],
  },
  {
    id: 'airframe',
    name: 'Châssis Tropicalisé & Propulsion',
    shortName: 'Structure Robuste',
    icon: Shield,
    category: 'Aérodynamique',
    specs: 'Fibre de carbone T700 · Indice d\'étanchéité IP55',
    description: 'Conception mécanique pensée pour résister aux poussières intenses de l\'Harmattan et aux fortes chaleurs du climat ouest-africain.',
    points: [
      'Bras repliables pour un transport aisé à moto ou pick-up',
      'Moteurs brushless à roulements étanches anti-sable',
      'Résistance à des vents soutenus jusqu\'à 45 km/h',
    ],
  },
];

export default function DroneAnatomy() {
  const [activeId, setActiveId] = useState<string>('vision');
  const activeSubsystem = subsystems.find((s) => s.id === activeId) ?? subsystems[0];

  return (
    <section id="technologie" className="section drone-anatomy-section">
      <div className="container">
        <SectionTitle
          eyebrow="Ingénierie & Spécifications"
          title="Une architecture pensée pour le terrain togolais"
        />

        {/* Global specs chips */}
        <div className="drone-specs-strip">
          <div className="spec-chip">
            <Gauge size={16} />
            <span>Autonomie : <strong>35–45 min de vol / batterie</strong></span>
          </div>
          <div className="spec-chip">
            <Navigation size={16} />
            <span>Précision : <strong>GPS RTK centimétrique (&lt; 2 cm)</strong></span>
          </div>
          <div className="spec-chip">
            <BatteryCharging size={16} />
            <span>Recharge : <strong>100% Solaire en station</strong></span>
          </div>
        </div>

        {/* Interactive Explorer Grid */}
        <div className="anatomy-interactive-grid">
          {/* Subsystems selector list */}
          <div className="subsystems-nav">
            <span className="subsystems-nav-title">Sélectionnez un sous-système :</span>
            {subsystems.map((subsystem) => {
              const Icon = subsystem.icon;
              const isSelected = subsystem.id === activeId;
              return (
                <button
                  key={subsystem.id}
                  type="button"
                  onClick={() => setActiveId(subsystem.id)}
                  className={`subsystem-btn ${isSelected ? 'is-active' : ''}`}
                >
                  <span className="subsystem-btn-icon">
                    <Icon size={18} />
                  </span>
                  <div className="subsystem-btn-text">
                    <strong>{subsystem.shortName}</strong>
                    <small>{subsystem.category}</small>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed view of active subsystem */}
          {(() => {
            const ActiveSubsystemIcon = activeSubsystem.icon;
            return (
              <div className="subsystem-detail-card">
                <div className="subsystem-detail-header">
                  <div className="detail-badge">
                    <ActiveSubsystemIcon size={20} />
                    <span>{activeSubsystem.category}</span>
                  </div>
                  <span className="detail-tech-badge">{activeSubsystem.specs}</span>
                </div>

                <h3>{activeSubsystem.name}</h3>
                <p className="detail-description">{activeSubsystem.description}</p>

                <div className="detail-key-points">
                  <strong>Atouts clés pour l'exploitant :</strong>
                  <ul>
                    {activeSubsystem.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
