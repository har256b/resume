<template>
  <div class="resume">
<div id="cv" class="instaFade">
    <div class="mainDetails">        
        <table style="width:100%">
            <tr>
                <td align="left">
                    <div id="name">
                        <h1 class="quickFade delayTwo">{{ name }}</h1>
                        <h2 class="quickFade delayThree">{{ title }}</h2>
                    </div>
                </td>
                <td align="right">
                    <div id="contactDetails" class="quickFade delayFour">
                        <ul>
                            <li><a href="mailto:ask@harehman.com" target="_blank">ask@harehman.com</a></li>
                            <li><a href="https://harehman.com" target="_blank">https://harehman.com</a></li>
                            <li><a href="https://www.linkedin.com/in/har256b" target="_blank">https://www.linkedin.com</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
        </table>
        <div class="clear"></div>
    </div>
    <div id="mainArea" class="quickFade delayFive">
      <!-- Profile Section -->
        <section>
            <article>
                <div class="sectionTitle">
                    <h1>Personal Profile</h1>
                </div>
                <div class="sectionContent">
                    <p>{{ cover }}</p>
                </div>
            </article>
            <div class="clear"></div>
        </section>
        
        <!-- Experiences Section -->
        <section>
            <div class="sectionTitle">
                <h1>Work Experience</h1>
            </div>
            <div class="sectionContent">
                <article v-for="experience in experiences">
                    <h2>{{ experience.position }} @ {{ experience.company }}</h2>
                    <p class="subDetails">{{ experience.duration }}</p>
                    <p>{{ experience.description }}</p>
                </article>
            </div>
            <div class="clear"></div>
        </section>
        
        <!-- Skills Section -->
        <section>
            <div class="sectionTitle">
                <h1>Key Skills</h1>
            </div>
            <div class="sectionContent">
                <div class="keySkills">
                    <li class="skill" v-for="skill in skills">
                      {{ skill.skill }}
                    </li>
                </div>
            </div>
            <div class="clear"></div>
        </section>
        
        <!-- Edications Section -->
        <section>
            <div class="sectionTitle">
                <h1>Education</h1>
            </div>
            <div class="sectionContent">
                <article v-for="education in educations">
                    <h2><span v-html="education.title"></span></h2>
                    <p class="subDetails">{{ education.institute }}</p>
                    <p>{{ education.description }}</p>
                </article>
            </div>
            <div class="clear"></div>
        </section>
        
        <!-- Recommendations Section -->
        <section>
            <div class="sectionTitle">
                <h1>Reviews &amp; Recommendations</h1>
            </div>
            <div class="sectionContent">
                <article v-for="recommendation  in recommendations">
                    <h2>{{ recommendation.name }}</h2>
                    <p class="subDetails">{{ recommendation.position }}</p>
                    <p v-html="recommendation.comment"></p>
                </article>
            </div>
            <div class="clear"></div>
        </section>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'resume',
  data () {
    return {
      name: 'Abdul Rehman, Hafiz',
      title: 'Software Engineering Architect',
      cover: 'With 8+ years of experience developing leading-edge technologies and architecting enterprise scale applications',
      experiences: [
        {
          position: 'Senior Software Engineer (Backend)',
          company: 'Products Up GmbH (Berlin, Germany)',
          duration: 'June 2018 - Present',
          description: 'As a member of backend engineering team, I am responsible for developing new executables entities for the upcoming features by following best practices and principles. Not only building them but also taking full responsibility from development to production and build Jenkins jobs to maintain scalability. We are using PHP in a way that each executable is highly decoupled and extremely coherrent to work together.'
        },
        {
          position: 'Fullstack Cloud Developer',
          company: 'Flexperto GmbH (Berlin, Germany)',
          duration: 'November 2016 - June 2018',
          description: 'Being a part of core team am responsible for brain storm, plan and execute new features in our Sass platform used by several leading financial institutions. Our platform is built on top of several modern technologies i.e. PHP 7, Node JS, MySQL, Redis, Socket IO, Web RTC, Elastic Search, Kibana and more. Our platform consist of several micro services running on containerized infrastructure.'
        },
        {
          position: 'Lead Software Engineer',
          company: 'Visual Spark Technologies L.L.C. (Dubai, United Arab Emirates)',
          duration: 'March 2016 - November 2016',
          description: 'Plan and Build new application for Inasurance industry using modern technologies i.e. Laravel for the Restful API and AngularJS on the frontend to consume. Also develop integration drivers for several leading insurance companies. I was also responsible for agility of the product using scrum methodology.'
        },
        {
          position: 'Principal Software Engineer',
          company: 'Axxya Systems L.L.C. (WA, USA)',
          duration: 'February 2014 - November 2016',
          description: 'Planning, Architecting and Implementing awesome coode in Laravel (and Symfony) and writing models for hybrid linkages between MySQL and MongoDB using Laravel\'s Eloquent ORM for an application being used by top leading Hospitals, Nutrinionists and Hotels of the USA and rest of the World. Also writing RIA interface for client side using AngularJS and jQuery to implement and consume application\'s architecture (Service Oriented Architecture). managing and helping out junior team members(5 in number) to complete their tasks and conduct daily scrum meetings to track the progress.'
        },
        {
          position: 'Senior Software Engineer',
          company: 'Cube Discipline (Islamabad, Pakistan)',
          duration: 'May 2013 - January 2014',
          description: 'Producing robust coode in Zend Framework (PHP) and writing optimized queries for MySQL and MongoDB to for an application being used by top notch universities of the world. Also writing complex components in jQuery/KnockoutJS and taking part in application architecture (Service Oriented Architecture). Helping junior team members to complete their tasks and conduct daily debates on emerging technologies.'
        },
        {
          position: 'Senior Seoftware Engineer',
          company: 'Datum Square IT Services (Islamabad, Pakistan)',
          duration: 'November 2012 - April 2013',
          description: 'Interacting with clients; gather information and develop the required functionalities, in Online Virtual Office Application (Custom Built for client) using modern development technologies (CI, MySQL, jQuery). I was also involved in writing and implementing Web Services and other required 3rd party development.'
        },
        {
          position: 'Lead Application Development Officer',
          company: 'Trust for Democratic Education and Accountability - FAFEN (Islamabad, Pakistan)',
          duration: 'December 2011 - November 2013',
          description: 'Produced an application (web and mobile based) for Pakistan\'s largest monitoring activity in General Elections 2013. To gather requirements from several departments and Designing & Architecture the new features for application(s), Responsible for maintain the health of servers (Linux) as well. Mainly responsible for Architecture Development and Leading the Team.'
        },
        {
          position: 'Assistant Project Manager (Technical)',
          company: 'AusPak Soft Solutions (Rawalpindi, Pakistan)',
          duration: 'August 2010 - July 2011',
          description: 'I was responsible to manage the team, and use my team to produce quality stuff using best practices, I have successfully manage many client\'s projects and few of the office assets(products) including, Inventory System, Accounting System, Human Resource Recruitment & Management System, Enterprise Resource Planner, Point of Sale and Online Advertising Portal. I have also promoted from Senior Team Lead to Assistant Project Manager (technical) in reward of my passion and dedication towords work.'
        },
        {
          position: 'Web & Software Engineer',
          company: 'redpixels Inc. (Islamabad, Pakistan)',
          duration: 'October 2009 - July 2011',
          description: 'My major role was to design the system and solutions for the web & multimedia industry, I have many projects in my basket to show off including the Military Services; I have developed an interactive multimedia learning kit of the Helicopter MI-17 for Pakistan Army Aviation College.'
        },
        {
          position: 'Web Developer',
          company: 'Global Marketing Services (Rawalpindi, Pakistan)',
          duration: 'June 2006 - September 2009',
          description: 'I was responsible to manage, develop and enhance all internal applications; I did develop many of the apps for our office use, including Order Processing System, Information Management System, Intranet Social Portal and more.'
        }
      ],
      skills: [
        {
          skill: 'Project Management',
          order: 1
        },
        {
          skill: 'System Analysis & Design',
          order: 1
        },
        {
          skill: 'System Architecture',
          order: 1
        },
        {
          skill: 'PHP, Golang, Python',
          order: 1
        },
        {
          skill: 'Symfony, Laravel',
          order: 1
        },
        {
          skill: 'Yii, Code Igniter',
          order: 1
        },
        {
          skill: 'MySQL, PostgreSQL',
          order: 1
        },
        {
          skill: 'MongoDB, OrientDB',
          order: 1
        },
        {
          skill: 'RethinkDB, Cassandra',
          order: 1
        },
        {
          skill: 'HTML5, CSS3/Sass',
          order: 1
        },
        {
          skill: 'AngularJS, VueJS, VanillaJS',
          order: 1
        },
        {
          skill: 'JSON, JWT, RESTful APIs',
          order: 1
        },
        {
          skill: 'Linux, CI/CD, Vagrant',
          order: 1
        },
        {
          skill: 'Docker, Scalability',
          order: 1
        },
        {
          skill: 'FullStack/DevOps Engineer',
          order: 1
        }
      ],
      educations: [
        {
          title: 'BS (<em>Software Engineering</em>)*',
          institute: 'Islamic International University, Islamabad',
          description: 'Specialized in software engineering along with distributed database systems and application security.'
        },
        {
          title: 'Certified PHP Developer',
          institute: 'eVenture Solutions, Lahore',
          description: 'Trained and Certified PHP/MySQL developer.'
        }
      ],
      recommendations: [
        {
          name: 'Felix Anthonj',
          position: 'Founder & CEO @ Flexperto GmbH – Germany',
          comment: 'Hafiz is an excellent full stack developer and colleague - 100% committed, easy to manage - able to deliver. I worked with him for more than a year and I was impressed by his talent to think out-of-the box. I would appreciate to have the chance to work with him again in the future.'
        },
        {
          name: 'Slava Popov',
          position: 'Software Engineer @ Flexperto GmbH – Germany',
          comment: 'Hafiz is a topnotch professional with strong knowledge in many software engineering aspects and with great soft skills as well. I\'ve been working with him for more than a year, and that was only positive experience. Would be happy to work together again someday!'
        },
        {
          name: 'Guillaume Jechoux',
          position: 'QA Engineer @ Flexperto GmbH – Germany',
          comment: 'It has been a pleasure to work with Hafiz. He is respectful and friendly. I was a QA engineer so I gave him a lot of feedback concerning the product we worked on, he always listened to what I had to say, and calmly explained why I was wrong when it was the case. He reacted very fast when necessary.'
        },
        {
          name: 'Peter Lämmer',
          position: 'Business Development Manager - Partnerships @ Microsoft – Germany',
          comment: 'we worked on joint project, Hafiz did brilliant job: <br>-software development for Webpage (PHP, CSS) <br>-business negotiation with other companies <br>Seek to get a long-term business relationship with Hafiz'
        },
        {
          name: 'Daniel Montazem',
          position: 'Cloud Sales Manager @ SAP - Co-Founder @ OfficeGYM – Germany',
          comment: 'Hafiz is an incredible guy to work with! <br>talented, responsible, and responsive. <br>He is eager to understand the topic to its full depth and is always keen to execute and implement the work and job as best as possible. <br>for every new. <br>another very important aspect to describe Hafiz, he is 100% trustable. <br>Hafiz is always looking over the horizon of his tasks and is looking for additional components to even improve the initial job description and actually, the overall project!'
        },
        {
          name: 'Dr. Fayyaz Sheikh',
          position: 'Deputy Program Director @ Ministry of Health – Pakistan',
          comment: 'Specialized in software engineering along with distributed database systems and application security.'
        },
        {
          name: 'Syed Ali Nauman',
          position: 'Project Manager @ Media Tech – Bahrain',
          comment: 'Specialized in software engineering along with distributed database systems and application security.'
        },
        {
          name: 'Mari Carmen Quinteros',
          position: 'Co-Founder & CEO @ Crea Digital – El Salvador',
          comment: 'hafiz is no doubt is hard working & challenging person, he did really help me a lot in achieving my deadlines & serve every time efficiently, I like honesty & ownership of work in his nature, good job genius, you are such an all-rounder.'
        },
        {
          name: 'Khan Bahadur',
          position: 'Manager Information Technology @ TDEA (FAFEN) – Pakistan',
          comment: 'A person who is a real genius I ever met and equipped with complete package of skills in such a young age. Always accepts challenges. He worked with me for almost 4 years and found him loyal and trustworthy and self believer and trust me he never disappoint you. he is himself a team. I always wish o work with him again.'
        },
        {
          name: 'Jameel Ur Rehman',
          position: 'SAP Project Manager @ Global Marketing Services – Pakistan',
          comment: 'Hafiz Abdulrehman, joined Global Marketing Services with positive energy and hunger for knowledge. He has supported our development team in successfully delivering numerous system including Inventory Management, Logistic Tracking system, and Field Force Tracking system with Google API,  We have always welcome his initiative ideas and positive attitude towards complicated issues and appreciated his logical approach.'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .clear {clear: both;}

  h1, h2 {
    margin-top: 0;
  }

  p {
    font-size: 1em;
    line-height: 1.4em;
    margin-bottom: 20px;
    margin-top: 5px;
    color: #444;
  }

  #cv {
    background: #f3f3f3;
    margin: 30px;
  }

  .mainDetails {
    padding: 25px 35px;
    border-bottom: 2px solid #cf8a05;
    background: #ededed;
  }

  #name h1 {
    font-size: 2.5em;
    font-weight: 700;
    font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
    margin-bottom: -6px;
    margin: 0 auto;
  }

  #name h2 {
    font-size: 2em;
    margin-left: 2px;
    font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
    margin: 0 auto;
  }

  #mainArea {
    padding: 0 40px;
  }

  #headshot {
    width: 12.5%;
    float: left;
    margin-right: 30px;
  }

  #headshot img {
    width: 100%;
    height: auto;
    -webkit-border-radius: 50px;
    border-radius: 50px;
  }

  #name {
    float: left;
  }

  #contactDetails {
    float: right;
  }

  #contactDetails ul {
    list-style-type: none;
    font-size: 0.9em;
  }

  #contactDetails ul li {
    margin-bottom: 3px;
    color: #444;
  }

  #contactDetails ul li a, a[href^=tel] {
    color: #444; 
    text-decoration: none;
    -webkit-transition: all .3s ease-in;
    -moz-transition: all .3s ease-in;
    -o-transition: all .3s ease-in;
    -ms-transition: all .3s ease-in;
    transition: all .3s ease-in;
  }

  #contactDetails ul li a:hover { 
    color: #cf8a05;
  }

  section {
    border-top: 1px solid #dedede;
    padding: 20px 0 0;
  }

  section:first-child {
    border-top: 0;
  }

  section:last-child {
    padding: 20px 0 10px;
  }

  .sectionTitle {
    float: left;
    width: 25%;
  }

  .sectionContent {
    float: right;
    width: 72.5%;
  }

  .sectionTitle h1 {
    font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
    font-style: italic;
    font-size: 1.5em;
    color: #cf8a05;
  }

  .sectionContent h2 {
    font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
    font-size: 1.5em;
    margin-bottom: -2px;
  }

  .subDetails {
    font-size: 0.8em;
    font-style: italic;
    margin-bottom: 3px;
  }

  .keySkills {
    list-style-type: none;
    -moz-column-count:3;
    -webkit-column-count:3;
    column-count:3;
    margin-bottom: 20px;
    font-size: 1em;
    color: #444;
  }

  .keySkills ul li {
    margin-bottom: 3px;
  }

  @media all and (min-width: 602px) and (max-width: 800px) {
    #headshot {
      display: none;
    }
    
    .keySkills {
    -moz-column-count:2;
    -webkit-column-count:2;
    column-count:2;
    }
  }

  @media all and (max-width: 601px) {
    #cv {
      width: 95%;
      margin: 10px auto;
      min-width: 280px;
    }
    
    #headshot {
      display: none;
    }
    
    #name, #contactDetails {
      float: none;
      width: 100%;
      text-align: center;
    }
    
    .sectionTitle, .sectionContent {
      float: none;
      width: 100%;
    }
    
    .sectionTitle {
      margin-left: -2px;
      font-size: 1.25em;
    }
    
    .keySkills {
      -moz-column-count:2;
      -webkit-column-count:2;
      column-count:2;
    }
  }

  @media all and (max-width: 480px) {
    .mainDetails {
      padding: 15px 15px;
    }
    
    section {
      padding: 15px 0 0;
    }
    
    #mainArea {
      padding: 0 25px;
    }

    .keySkills {
    -moz-column-count:1;
    -webkit-column-count:1;
    column-count:1;
    }
    
    #name h1 {
      line-height: .8em;
      margin-bottom: 4px;
    }
  }

  @media print {
      #cv {
          width: 100%;
      }
  }

  @-webkit-keyframes reset {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes reset {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @-moz-keyframes fade-in {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes reset {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .instaFade {
    -webkit-animation-name: reset, fade-in;
    -webkit-animation-duration: 1.5s;
    -webkit-animation-timing-function: ease-in;
  
    -moz-animation-name: reset, fade-in;
    -moz-animation-duration: 1.5s;
    -moz-animation-timing-function: ease-in;
  
    animation-name: reset, fade-in;
    animation-duration: 1.5s;
    animation-timing-function: ease-in;
  }

  .quickFade {
    -webkit-animation-name: reset, fade-in;
    -webkit-animation-duration: 2.5s;
    -webkit-animation-timing-function: ease-in;
  
    -moz-animation-name: reset, fade-in;
    -moz-animation-duration: 2.5s;
    -moz-animation-timing-function: ease-in;
  
    animation-name: reset, fade-in;
    animation-duration: 2.5s;
    animation-timing-function: ease-in;
  }
   
  .delayOne {
    -webkit-animation-delay: 0, .5s;
    -moz-animation-delay: 0, .5s;
    animation-delay: 0, .5s;
  }

  .delayTwo {
    -webkit-animation-delay: 0, 1s;
    -moz-animation-delay: 0, 1s;
    animation-delay: 0, 1s;
  }

  .delayThree {
    -webkit-animation-delay: 0, 1.5s;
    -moz-animation-delay: 0, 1.5s;
    animation-delay: 0, 1.5s;
  }

  .delayFour {
    -webkit-animation-delay: 0, 2s;
    -moz-animation-delay: 0, 2s;
    animation-delay: 0, 2s;
  }

  .delayFive {
    -webkit-animation-delay: 0, 2.5s;
    -moz-animation-delay: 0, 2.5s;
    animation-delay: 0, 2.5s;
  }
</style>
