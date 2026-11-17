import { useState } from 'react';
import { Calculator, Clock, Coins, Sparkles, Sprout } from 'lucide-react';
import { SectionTitle } from '@/components/Shared';

const cropProfiles = [
  { id: 'cereales', name: 'Maïs & Céréales', costPerHa: 30000, waterPerHa: 200 },
  { id: 'coton', name: 'Coton & Légumineuses', costPerHa: 45000, waterPerHa: 250 },
  { id: 'rente', name: 'Café & Cacao (Plateaux)', costPerHa: 50000, waterPerHa: 300 },
  { id: 'maraichage', name: 'Maraîchage & Légumes', costPerHa: 60000, waterPerHa: 350 },
];

export default function RoiCalculator() {
  const [hectares, setHectares] = useState<number>(25);
  const [selectedCrop, setSelectedCrop] = useState<string>('cereales');

  const currentCrop = cropProfiles.find((c) => c.id === selectedCrop) ?? cropProfiles[0];

  // Calculs agronomiques réalistes
  // Économie moyenne de 60% d'intrants grâce au ciblage de précision
  const inputSavingsFCFA = Math.round(hectares * currentCrop.costPerHa * 0.6);
  // Temps de traitement manuel : ~5h/ha vs 0.3h (18 min)/ha avec PhytoraSky
  const hoursSaved = Math.round(hectares * 4.7);
  // Économie d'eau en litres (90% de réduction par rapport à la pulvérisation à haut volume)
  const waterSavedLiters = Math.round(hectares * currentCrop.waterPerHa * 0.85);

  return (
    <section id="simulateur" className="section roi-calculator-section">
      <div className="container">
        <SectionTitle
          eyebrow="Simulateur d'impact"
          title="Estimez les gains pour votre exploitation"
        />

        <div className="roi-calculator-container">
          <div className="roi-controls">
            {/* Type de culture */}
            <div className="roi-control-group">
              <label className="roi-control-label">Type de production :</label>
              <div className="crop-selector-grid">
                {cropProfiles.map((crop) => (
                  <button
                    key={crop.id}
                    type="button"
                    onClick={() => setSelectedCrop(crop.id)}
                    className={`crop-pill ${crop.id === selectedCrop ? 'is-selected' : ''}`}
                  >
                    <Sprout size={15} />
                    <span>{crop.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Slider Superficie */}
            <div className="roi-control-group">
              <div className="roi-slider-header">
                <label className="roi-control-label" htmlFor="hectares-slider">
                  Superficie à protéger :
                </label>
                <span className="roi-slider-value">{hectares} hectares</span>
              </div>
              <input
                id="hectares-slider"
                type="range"
                min="5"
                max="250"
                step="5"
                value={hectares}
                onChange={(e) => setHectares(Number(e.target.value))}
                className="roi-range-slider"
              />
              <div className="roi-slider-ticks">
                <span>5 ha</span>
                <span>50 ha</span>
                <span>100 ha</span>
                <span>250 ha</span>
              </div>
            </div>
          </div>

          {/* Dynamic Result Cards */}
          <div className="roi-results-grid">
            <div className="roi-result-card highlight">
              <div className="roi-result-icon">
                <Coins size={22} />
              </div>
              <div>
                <span className="roi-result-label">Économie d'intrants estimée</span>
                <strong className="roi-result-number">
                  {inputSavingsFCFA.toLocaleString('fr-FR')} FCFA
                </strong>
                <small className="roi-result-sub">Par cycle de traitement phytosanitaire</small>
              </div>
            </div>

            <div className="roi-result-card">
              <div className="roi-result-icon">
                <Clock size={22} />
              </div>
              <div>
                <span className="roi-result-label">Temps de travail préservé</span>
                <strong className="roi-result-number">{hoursSaved} heures</strong>
                <small className="roi-result-sub">Plus de fatigue excessive sous le soleil</small>
              </div>
            </div>

            <div className="roi-result-card">
              <div className="roi-result-icon">
                <Sparkles size={22} />
              </div>
              <div>
                <span className="roi-result-label">Eau douce préservée</span>
                <strong className="roi-result-number">
                  {waterSavedLiters.toLocaleString('fr-FR')} L
                </strong>
                <small className="roi-result-sub">Pulvérisation ultra-fine sans ruissellement</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
