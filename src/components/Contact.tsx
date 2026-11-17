import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [profileType, setProfileType] = useState<string>('coop');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    region: 'Maritime (Lomé)',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappText = encodeURIComponent(
    `Bonjour l'équipe PhytoraSky ! Je vous contacte depuis le site web afin d'échanger sur vos solutions de drones agricoles et environnementaux au Togo.`
  );

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <span className="eyebrow eyebrow-light">Construisons l'avenir ensemble</span>
          <h2>Prêt à faire grandir l'agriculture togolaise ?</h2>
          <p className="contact-subtitle">
            Partenariat, déploiement pilote sur vos parcelles ou investissement : notre équipe
            est à votre écoute pour préparer les prochaines missions.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left: Contact Info & WhatsApp */}
          <div className="contact-info-panel">
            <h3>Coordonnées directes</h3>
            <p>
              Basés à Lomé, nous intervenons dans toutes les 5 régions économiques du Togo pour
              des démonstrations et des vols d'évaluation.
            </p>

            <div className="contact-info-list">
              <a href="mailto:contact@phytorasky.tg" className="contact-info-item">
                <span className="info-icon"><Mail size={18} /></span>
                <div>
                  <small>Email</small>
                  <strong>contact@phytorasky.tg</strong>
                </div>
              </a>

              <a href="tel:+22890000000" className="contact-info-item">
                <span className="info-icon"><Phone size={18} /></span>
                <div>
                  <small>Ligne directe & WhatsApp</small>
                  <strong>+228 91 36 20 88 / 71 82 40 33</strong> 
                </div>
              </a>

              <div className="contact-info-item">
                <span className="info-icon"><MapPin size={18} /></span>
                <div>
                  <small>Siège opérationnel</small>
                  <strong>Lomé, Togo</strong>
                </div>
              </div>
            </div>

            <div className="whatsapp-card">
              <h4>Échange rapide sur WhatsApp ?</h4>
              <p>Discutez directement avec notre équipe technique ou planifiez une rencontre.</p>
              <a
                href={`https://wa.me/228 91 36 20 88?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
                className="button button-whatsapp"
              >
                <MessageSquare size={17} /> Démarrer la discussion WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Interactive Inquiry Form */}
          <div className="contact-form-panel">
            {submitted ? (
              <div className="contact-success-state">
                <CheckCircle2 size={48} className="success-icon" />
                <h3>Demande transmise avec succès !</h3>
                <p>
                  Merci {formData.name || 'pour votre intérêt'}. Un responsable de l'équipe
                  PhytoraSky prendra contact avec vous sous 24 à 48 heures.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      organization: '',
                      email: '',
                      phone: '',
                      region: 'Maritime (Lomé)',
                      message: '',
                    });
                  }}
                  className="button button-light"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="profile-selector">
                  <span className="profile-selector-title">Votre profil :</span>
                  <div className="profile-pills">
                    {[
                      { id: 'coop', label: 'Coopérative / Producteur' },
                      { id: 'partner', label: 'Investisseur / Partenaire' },
                      { id: 'ong', label: 'Institution / ONG' },
                      { id: 'etud', label: 'Etudiant / Elève'},
                    ].map((pill) => (
                      <button
                        key={pill.id}
                        type="button"
                        onClick={() => setProfileType(pill.id)}
                        className={`profile-pill ${profileType === pill.id ? 'is-active' : ''}`}
                      >
                        {pill.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom complet *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Ex: Kodjo Mensah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="org">Organisation / Exploitation</label>
                    <input
                      id="org"
                      type="text"
                      placeholder="Ex: Coopérative Agricole de la Kozah"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Adresse e-mail *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="adresse@domaine.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Téléphone (+228) *</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+228 9X XX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="region">Région principale d'intervention</label>
                  <select
                    id="region"
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  >
                    <option value="Maritime (Lomé)">Région Maritime (Lomé, Tsévié, Tabligbo, Aného)</option>
                    <option value="Plateaux (Kpalimé / Atakpamé)">Région des Plateaux (Kpalimé, Atakpamé, Badou, Amlamé)</option>
                    <option value="Centrale (Sokodé)">Région Centrale (Sokodé, Tchamba)</option>
                    <option value="Kara">Région de la Kara (Kara, Bassar, Niamtougou)</option>
                    <option value="Savanes (Dapaong)">Région des Savanes (Dapaong, Mango)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Votre message ou description des besoins</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Précisez la superficie de vos parcelles ou l'objet de votre collaboration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="button button-submit">
                  <span>Transmettre ma demande</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
