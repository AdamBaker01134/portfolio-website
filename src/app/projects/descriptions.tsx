export function CropDecisionToolDescription() {
  return (
    <div className="flex flex-col">
      <div className="text-lg font-bold">Crop Decision Tool</div>
      <div className="my-1">
        The Department of Agriculture at the University of Saskatchewan hired me
        to develop a web application for showcasing their yield and profit
        forecasting models. As the sole developer of the web interface, I built
        the frontend, backend, and deployment infrastructure from the ground up.
        The application uses React for the frontend, a FastAPI (Python) backend,
        and PostgreSQL for data storage. It is deployed on AWS EC2 instances
        provisioned with Terraform and configured using Ansible.
      </div>
      <div className="mt-1">
        The application provides an interactive map interface where users can
        select fields on their farm and enter field-level information along with
        operational and insurance-related costs for the upcoming harvest. These
        inputs are incorporated into forecasting models that generate predicted
        distributions for expected yield and profit across multiple crops and
        crop varieties. Through this project, I have gained valuable experience
        in full-stack development, cloud infrastructure, resource management,
        designing intuitive experiences for non-technical users, and managing
        multiple major features throughout the software development lifecycle.
      </div>
    </div>
  );
}

export function CeltxDescription() {
  return (
    <div className="flex flex-col">
      <div className="text-lg font-bold">Celtx Internship</div>
      <div className="my-1">
        I worked as a Software Developer Intern at Celtx from May 2021 to
        September 2022. During this 16-month internship, I worked remotely on
        testing, debugging, and developing new features for Celtx&apos;s media
        pre-production web application. This was my first professional software
        development role and where I developed a strong interest in full-stack
        development and web application development.
      </div>
      <div className="mt-1">
        During my time at Celtx, I gained valuable experience working with
        real-world bug reports, managing development tasks, and collaborating
        with both technical and non-technical team members to deliver features
        for real users. I worked with Selenium for automated testing, Atlassian
        tools for project and ticket management, Docker for development, and
        JavaScript as my primary programming language. I also participated in
        weekly Scrum meetings, gaining hands-on experience with Agile
        development practices and team-based software development.
      </div>
    </div>
  );
}

export function MastersResearchDescription() {
  return (
    <div className="flex flex-col">
      <div className="text-lg font-bold">Master&apos;s Research</div>
      <div className="my-1">
        My Master&apos;s research focused on evaluating different techniques for
        comparing videos and investigating how effectively users could interact
        with and understand each technique. As part of this research, I
        developed multiple web-based study systems that presented these
        techniques to crowdsourced participants and collected their feedback
        through user surveys. I analyzed the resulting data using R&apos;s
        statistical tools and transformed the results into comprehensive
        visualizations to identify trends and compare the effectiveness of each
        approach.
      </div>
      <div className="my-1">
        For more information on my research, check out my{" "}
        <a
          className="text-blue-400 underline hover:text-blue-600"
          href="/publications"
        >
          Publications
        </a>
      </div>
    </div>
  );
}

export function WeddingWebsiteDescription() {
  return (
    <div className="flex flex-col">
      <div className="text-lg font-bold">Wedding Website</div>
      <div className="my-1">
        With my experience in full-stack development, I decided to build a
        custom website for my wedding rather than use a conventional wedding
        website provider such as Zola or The Knot. I designed and implemented
        several features, including an interactive wedding venue map using the
        Google Maps API, our story, a Q&A section, and a fully integrated RSVP
        system. The RSVP system communicates with a Node.js backend and stores
        RSVP data in a Firestore database. This was a fun personal project that
        allowed me to apply my full-stack development skills while giving us
        complete control over the design and functionality of our wedding
        website.
      </div>
    </div>
  );
}
