import { Breadcrumbs, Faq } from './Sections.jsx';
import { ExternalLinkIcon } from './Icons.jsx';
import { GYMFLEX_FAQS } from '../data.js';

const IMG = `${import.meta.env.BASE_URL}images/gymflex/`;

const STEPS = [
  { icon: 'step-open.svg', title: 'Open GymFlex', body: 'Hit the green button to go straight to GymFlex and get started.' },
  { icon: 'step-find.svg', title: 'Find your club', body: 'Search by postcode to see every participating club within ten miles, with the corporate rate against the standard one.' },
  { icon: 'step-select.svg', title: 'Select your membership', body: 'Choose the club and membership type, including joint or family where offered, and follow the instructions on screen.' },
  { icon: 'step-confirm.svg', title: 'Watch for the confirmation', body: 'GymFlex email you with what happens next. The membership is not set up until you have completed the steps in that email.' },
];

function GymflexButton({ className = '' }) {
  return (
    <a href="#" className={`primary-button gf-button ${className}`}>
      Choose your gym at GymFlex
      <ExternalLinkIcon />
    </a>
  );
}

function InfoCard({ eyebrow, title, titleClass = '', lines }) {
  return (
    <div className="gf-card">
      <p className="gf-card-eyebrow">{eyebrow}</p>
      <p className={`gf-card-title ${titleClass}`}>{title}</p>
      {lines.map(([text, cls]) => <p key={text} className={cls}>{text}</p>)}
    </div>
  );
}

// Version B: the proposed GymFlex page (Figma "GymFlex - Desktop concept" / "Mobile concept")
export default function GymflexB() {
  return (
    <main className="gf">
      <div className="gf-crumbs">
        <div className="gf-inner">
          <Breadcrumbs trail={['Benefits']} current="GymFlex" />
        </div>
      </div>

      <section className="gf-hero" style={{ backgroundImage: `url(${IMG}hero-bg.jpg)` }}>
        <div className="gf-inner gf-hero-inner">
          <div className="gf-hero-text">
            <h1>GymFlex - the fitness benefit that offers you huge savings on gym memberships</h1>
            <p>Up to 40% off a 12-month membership at over 3,600 gyms, leisure centres and studios. We pay the club upfront, you pay us back monthly through your salary, saving on National Insurance, too.</p>
            <GymflexButton />
          </div>
          <img className="gf-hero-image" src={`${IMG}hero-people.png`} width="480" height="396" alt="" />
        </div>
      </section>

      <section className="gf-section gf-highlights">
        <div className="gf-inner gf-stack">
          <h2 className="section-title">Highlights</h2>
          <div className="gf-cards">
            <InfoCard
              eyebrow="Saving"
              title="Up to 40%"
              titleClass="is-green"
              lines={[['Off standard 12-month rates', 'gf-card-line'], ['Plus up to 12% saved on National Insurance, because it comes out of gross pay.', 'gf-card-note']]}
            />
            <InfoCard
              eyebrow="Locations"
              title="3,600+"
              lines={[['Across the UK and Ireland', 'gf-card-line'], ['Big chains, low-cost operators, council leisure centres and independent studios.', 'gf-card-note']]}
            />
          </div>
        </div>
      </section>

      <section className="gf-section">
        <div className="gf-inner gf-describe">
          <div className="gf-describe-text">
            <h2 className="section-title">Huge savings on gym memberships</h2>
            <p>Through GymFlex you can select membership at over 3,600 participating gyms, health clubs and leisure centres and save on the cost of membership for you and your family. Any joining or admin fees charged by the club are included in the membership fee quoted to you so there are no hidden costs to worry about.</p>
            <p>A range of membership options are available including many reciprocal memberships which entitle you to use all clubs within a group or chain depending on the level or grade of membership you selected. Particularly useful if you travel or if you wish to have access to a gym both near your home and place of work.</p>
            <p>The scheme covers over 3,600 sites: the big chains like Nuffield Health, David Lloyd, Better and Virgin Active, low-cost operators like PureGym and The Gym Group, hundreds of council leisure centres, and independent clubs running HIIT, CrossFit, yoga, pilates and bootcamps. Many clubs offer discounted joint and family memberships too.</p>
          </div>
          <img className="gf-describe-image" src={`${IMG}gym-rowing.jpg`} width="420" height="240" alt="" />
        </div>
      </section>

      <section className="gf-section">
        <div className="gf-inner gf-stack gf-stack-32">
          <h2 className="section-title">How to get this benefit</h2>
          <ol className="gf-steps">
            {STEPS.map((s) => (
              <li key={s.title} className="gf-step">
                <span className="gf-step-circle"><img src={`${IMG}${s.icon}`} width="40" height="40" alt="" /></span>
                <p className="gf-step-title">{s.title}</p>
                <p className="gf-step-body">{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="gf-cta-bar"><GymflexButton /></div>
        </div>
      </section>

      <section className="gf-section">
        <div className="gf-inner gf-provider">
          <div className="gf-provider-logo">
            <img src={`${IMG}gymflex-logo.png`} width="168" height="75" alt="epassi GymFlex Health Club Memberships" />
          </div>
          <div className="gf-provider-text">
            <h2>GymFlex</h2>
            <p>GymFlex run the scheme and hold the relationship with every club on it. We handle the payroll side - paying the club upfront and collecting it back from your salary. Anything about the membership itself, the club or your booking goes to GymFlex on 0345 300 6474, not to us.</p>
          </div>
        </div>
      </section>

      <Faq items={GYMFLEX_FAQS} className="gf-faq" />

      <section className="gf-section">
        <div className="gf-inner gf-stack">
          <h2 className="section-title">Help and support</h2>
          <div className="gf-cards">
            <InfoCard
              eyebrow="About the benefit"
              title="GymFlex"
              lines={[['Your membership and your club', 'gf-card-note'], ['Anything about your selection, the club itself, or using the membership once it has started.', 'gf-card-note']]}
            />
            <div className="gf-card">
              <p className="gf-card-eyebrow">About your pay or access</p>
              <p className="gf-card-title">Our support team</p>
              <a href="#" className="gf-card-link">rg.co/happytohelp</a>
              <p className="gf-card-note">Eligibility, salary deductions, and anything about getting into the benefit from here. We cannot see what happens on the partner’s side.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gf-section">
        <div className="gf-inner gf-closing">
          <div className="gf-closing-text">
            <h2>Ready to pick your gym?</h2>
            <p>Search by postcode, compare the corporate rate against the standard one, and select in a couple of minutes.</p>
          </div>
          <GymflexButton />
        </div>
      </section>
    </main>
  );
}
