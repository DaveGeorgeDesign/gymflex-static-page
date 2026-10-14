const IMG = `${import.meta.env.BASE_URL}images/gymflex/`;

// Version A: the current live GymFlex page (Figma Reference page, "GymFlex Static - Benefit Page").
// The CMS "Edit page" button and the floating "top" button are left out, as employees don't see them.
export default function GymflexA() {
  return (
    <main className="gfa">
      <div className="gfa-inner">
        <h1 className="gfa-title">GymFlex</h1>
        <div className="gfa-layout">
          <article className="gfa-article">
            <img className="gfa-banner" src={`${IMG}brand-new-benefit.jpg`} width="610" height="160" alt="Brand new benefit! GymFlex Health Club Memberships" />
            <p>We’re thrilled to announce the launch of GymFlex – our brand-new fitness benefit that offers you huge savings on a 12-month gym membership via salary sacrifice deduction at over 3,300 locations across the UK!</p>
            <p>As an employee of Reward Gateway|Edenred, you can enjoy discounts of up to 40% off at all the big chains, like Nuffield Health, David Lloyd, Better and Virgin Active, the low-cost operators like PureGym and The Gym Group, as well as many local leisure centres. Additionally, you’ll find hundreds of independent clubs on the scheme offering discounts on HIIT, CrossFit, yoga, pilates, bootcamps and lots more. With thousands of options available, there’s something on offer to suit everyone’s location, preference and budget.</p>
            <h2>Become fitter, healthier and happier!</h2>
            <p>Exercise plays a huge part in your physical and mental wellbeing, and taking care of that right now has never been more important. So, what better time to create a new fitness habit than right now!</p>
            <p>Plus, it’s not just you that can save with GymFlex, discounted joint and family memberships are also available at many clubs!</p>
            <p>Reward Gateway|Edenred, will pay for your membership upfront and in full and will reclaim this back via salary deductions.</p>
            <h2>How to sign up?</h2>
            <p>It's easy - just follow these steps:</p>
            <ol>
              <li>You can access the GymFlex now by <strong>clicking on the tile</strong> on <a href="#" className="gfa-visited">boom! Discounts UK home page</a>.</li>
              <li>Once you’ve browsed all options and chosen the right gym for you, <strong>click select</strong> and follow the instructions on screen.</li>
              <li><strong>Keep an eye on your inbox</strong> for your confirmation email, as this will have instructions on what to do next.</li>
            </ol>
            <p className="gfa-gap">These steps must be completed to ensure your membership is set up correctly.</p>
            <p>If you have any questions, please contact the GymFlex customer service team using the <a href="#">Contact Us option available on your GymFlex page</a>.</p>
            <p>Make 2025 your fittest, healthiest and happiest year yet with GymFlex!</p>
          </article>

          <aside className="gfa-aside">
            <div className="gfa-box">
              <p className="gfa-updated-label">Last updated:</p>
              <p className="gfa-updated">25 Nov 2025, 10:37</p>
            </div>
            <div className="gfa-box">
              <p className="gfa-links-title">Useful links</p>
              <ul className="gfa-links">
                <li><a href="#"><LinkIcon />FAQs</a></li>
                <li><a href="#"><LinkIcon />Terms &amp; Conditions for Employees</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function LinkIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6.5 9.5l3-3M7 4.5l1.2-1.2a2.8 2.8 0 014 4L11 8.5M9 11.5l-1.2 1.2a2.8 2.8 0 01-4-4L5 7.5" stroke="#333" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
