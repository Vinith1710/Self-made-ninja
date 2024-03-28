import curley from '../../Assets/icons/curly-braces.png';
import htmlTag from '../../Assets/icons/html-tag.png';
import snaHero from '../../Assets/icons/SNA-hero.png';
import iot from '../../Assets/icons/iot.svg';
import java from '../../Assets/icons/java.svg';
import hackerHat from '../../Assets/icons/hackerhat.svg';
import coding from '../../Assets/icons/coding.svg';
import people from '../../Assets/icons/people.png';
import peopleSvg from '../../Assets/icons/people-svg.svg';
import labGlass from '../../Assets/icons/lab-glass.png';
import book from '../../Assets/icons/book.png';
import bulp from '../../Assets/icons/bulb-svg.svg';
import github from '../../Assets/icons/git-svg.svg';
import happy from '../../Assets/icons/happy-svg.svg';
import doubleArrow from '../../Assets/icons/double-arrow.png';
import chevronLeft from '../../Assets/icons/chevron-left.svg';
import chevronRight from '../../Assets/icons/chevron-right.svg';
import circleLeft from '../../Assets/icons/circle-left-arrow.svg';
import circleRight from '../../Assets/icons/circle-right-arrow.svg';
import arrowLeft from '../../Assets/icons/arrow-left.png';
import arrowRight from '../../Assets/icons/arrow-right.png';
import instructor1 from '../../Assets/images/Instructor/Manoj 1f8c677.png';
import instructor2 from '../../Assets/images/Instructor/Nishant 1.png';
import instructor3 from '../../Assets/images/Instructor/Sibidharan 1.png';
import hariStudent from '../../Assets/images/students/student-hari-boy.png';
import krithikStudent from '../../Assets/images/students/student-krithik-boy.png';
import rajithStudent from '../../Assets/images/students/student-rajith-boy.png';
import venkyStudent from '../../Assets/images/students/student-venky-boy.png';
import vijayStudent from '../../Assets/images/students/student-vijay-boy.png';
import feedbackPng from '../../Assets/icons/Feedback.png';

function Main(){
    return(
        <>
        <div class="hero-container" id="hero-container">
    <img class="decoration-icon" src={curley} alt="curly-braces"/>
    <img class="decoration-icon" src={htmlTag} alt="html-tag"/>
    <img class="decoration-icon" src={htmlTag} alt="html-tag"/>
    <div class="row">
        <div class="col-lg-6 hero-image-container">
            <div class="hero-background">
                <div class="hero-image">
                    <img src={snaHero} alt="Hero Image"/>
                </div>
                <div class="extra-icons">
                    <div class="extra-icons-wrapper h-100">
                        <img class="iot-svg floating" src={iot} alt="iot-svg"/>
                        <img class="java-svg floating" src={java} alt="java-svg"/>
                        <img class="hackerhat-svg floating" src={hackerHat} alt="hackerhat-svg"/>
                        <img class="coding-svg floating" src={coding} alt="codeing-svg"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6 welcome-text-container">
            <div class="welcome-wrapper">
                <h1 class="welcome-text title-font">
                    Master<br/><span>THE ART OF TECH</span><br/>Be a <span>Selfmade Ninja</span>
                </h1>
                <div class="welcome-buttons">
                    <a href="/courses" class="btn btn-outline-main">Explore Courses</a>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- Why selfmade ninja Academy section --> */}
<div class="why-sna-section auto-layout">
    <h2 class="section-title title-font">Don't <span class="d-lg-inline"> just</span> <span class="text-main"> learn, Do </span></h2>
    <div class="row why-sna-wrapper">
        <div class="col-lg-6 col-xl-4 why-sna-item">
            <div class="why-sna-icon"><img loading="lazy" src={people} alt="icon"/></div>
            <h3 class="why-sna-title">Dive in and get your hands dirty</h3>
            <p class="why-sna-text">Learning tech and programming is all about experience, and that's what we provide! Our curriculum covers everything from programming languages to the Internet of Things. You'll have the opportunity to practice what you learn in our own VPN and Cloud labs, gaining real-world experience in the technologies you're learning.</p>

        </div>
        <div class="col-lg-6 col-xl-4 why-sna-item">
            <div class="why-sna-icon"><img loading="lazy" src={labGlass} alt="icon"/></div>
            <h3 class="why-sna-title">Connect with your tribe of Selfmade Ninjas</h3>
            <p class="why-sna-text">As you progress through our curriculum, you'll become part of our Selfmade Ninja community. You'll have the opportunity to connect with like-minded learners who are just as passionate about tech as you are. Share knowledge, collaborate on projects, and support each other as you all work towards becoming tech professionals.</p>
        </div>
        <div class="col-lg-6 col-xl-4 why-sna-item">
            <div class="why-sna-icon"><img loading="lazy" src={book} alt="icon"/></div>
            <h3 class="why-sna-title">Unleash your inner Ninja</h3>
            <p class="why-sna-text">You've completed our curriculum, gained the necessary skills and knowledge, and connected with your tribe of Selfmade Ninjas. You're now ready to take on the tech industry as a Selfmade Ninja! With the confidence, community, and experience you've gained through our academy, you'll be well-equipped to pursue a career in technology and programming. So go ahead, unleash your inner Ninja and take the first step towards a bright future!</p>
        </div>
    </div>
</div>

{/* <!-- step by step procedure --> */}
<div class="enroll-steps-wrapper auto-layout auto-layout-padding" >
    <div class="design-cricle">
        <div class="design-cricle-inner"></div>
    </div>
    <div class="design-cricle">
        <div class="design-cricle-inner"></div>
    </div>
    <h2 class="enroll-step-title title-font">Your journey to <br/> Becoming a Tech Pro</h2>
    <div class="sna-journey-swiper swiper swiper-pointer-events">
        <div class="swiper-wrapper">
            <div class="swiper-slide" style={{width: '291.75px', marginRight:'24px'}}>
                <div class="sna-journey-item">
                    <img loading="lazy" src={bulp} alt="bulb-svg" class="sna-journey-item-head-img"/>
                    <div class="sna-journey-text-wrapper">
                        <h3 class="sna-journey-item-count">01 Enroll and unlock your potential</h3>
                        <p class="sna-journey-text">First, you'll enroll in our academy and gain access to our cutting-edge curriculum, led by experienced instructors who are passionate about sharing their knowledge. You'll unlock your potential with comprehensive, hands-on learning that covers everything from programming languages to the Internet of Things.</p>
                    </div>
                    <img loading="lazy" src={bulp} alt="bulb-svg" class="sna-journey-item-head-img"/>
                </div>
            </div>
            <div class=" swiper-slide " style={{width: '291.75px', marginRight:'24px'}}>
                <div class=" sna-journey-item sna-journey-item-reverse">
                    <img loading="lazy" src={peopleSvg} alt="people-svg" class="sna-journey-item-head-img"/>
                    <div class="sna-journey-text-wrapper">
                        <h3 class="sna-journey-item-count">02 Learn, Practice, and master the tech</h3>
                        <p class="sna-journey-text">Next, you'll dive into our curriculum and get hands-on experience with the latest technologies using our own VPN and Cloud labs. You'll have the opportunity to practice what you learn in real-world scenarios and master the skills you need to succeed in the tech industry.</p>
                    </div>
                    <img loading="lazy" src={peopleSvg} alt="people-svg" class="sna-journey-item-head-img"/>
                </div>
            </div>
            <div class=" swiper-slide " style={{width: '291.75px', marginRight:'24px'}}>
                <div class=" sna-journey-item sna-journey-item-reverse">
                    <img loading="lazy" src={github} alt="git-svg" class="sna-journey-item-head-img"/>
                    <div class="sna-journey-text-wrapper">
                        <h3 class="sna-journey-item-count">03 Join the Selfmade Ninja community</h3>
                        <p class="sna-journey-text">As you progress through our curriculum, you'll become part of our dynamic and supportive Selfmade Ninja community. You'll connect with like-minded learners, share knowledge and experience, and support each other as you work towards becoming tech professionals.</p>
                    </div>
                    <img loading="lazy" src={github} alt="git-svg" class="sna-journey-item-head-img"/>
                </div>
            </div>
            <div class=" swiper-slide " style={{width: '291.75px', marginRight:'24px'}}>
                <div class=" sna-journey-item sna-journey-item-reverse">
                    <img loading="lazy" src={happy} alt="happy-svg" class="sna-journey-item-head-img"/>
                    <div class="sna-journey-text-wrapper">
                        <h3 class="sna-journey-item-count">04 Become a Selfmade Ninja and succeed</h3>
                        <p class="sna-journey-text">Finally, armed with the confidence, community, and experience you've gained through our academy, you'll be ready to take on the tech industry as a Selfmade Ninja. You'll have the skills, knowledge, and network to pursue a successful career in technology and programming and achieve your goals!</p>
                    </div>
                    <img loading="lazy" src={happy} alt="happy-svg" class="sna-journey-item-head-img"/>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- about sna video --> */}
<div class="auto-layout about-sna-video-wrapper">
    <img loading="lazy" class="decoration-icon" src={curley} alt="curly-braces"/>
    <img loading="lazy" class="decoration-icon" src={htmlTag} alt="html-tag"/>
    <img loading="lazy" class="decoration-icon" src={htmlTag} alt="html-tag"/>
    <div class="about-sna-video-item">
        <iframe class="about-sna-video" src="https://www.youtube.com/embed/AonG7qcQU2c?modestbranding=1&rel=0&disablekb=1&fs=0&loop=1" frameborder="0" allowfullscreen></iframe>
        <div class="about-sna-video-overlay"></div>
    </div>
</div>

{/* <!-- Recommended Courses --> */}
<div class="recommended-courses auto-layout">
    <h2 class="recommended-courses-title section-title title-font">In-demand <span class="text-main">Courses</span></h2>
    <div class="recommended-courses-body">
        <div class="nav-button nav-button__left" id="recommended-courses-nav-left">
            <i class="bi bi-arrow-left-circle-fill fs-1 shadow-lg"></i>
        </div>
        <div class="swiper recommended-courses-swiper">
            <div class="swiper-wrapper">
                                    <div class="swiper-slide card">
                        <img loading="lazy" class="recommended-course-img card-image-top" src="https://s3.selfmade.ninja/portal-assets/SNA Thumbnail/python_cli_thumb.png" alt="Course"></img>
                        <div class="recommended-course-details card-body">
                            <div class="recommended-course-title">Python CLI Application on Linux</div>
                            <div class="recommended-course-text mb-3">This course is designed to teach students how to build command-line interfaces using Python. Students will learn about popular libraries such as argparse and click, as well as best practices for creating efficient and user-friendly interfaces. By the end of the course, students will have the skills to create robust and effective command-line applications.</div>
                            <a class="recommended-course-link" href="/course?p=Python+CLI+Application+on+Linux">Enroll Now<span><img loading="lazy" src={doubleArrow} alt="double-arrow"/></span></a>
                        </div>
                    </div>
                                        <div class="swiper-slide card">
                        <img loading="lazy" class="recommended-course-img card-image-top" src="https://s3.selfmade.ninja/portal-assets/SNA Thumbnail/offensive_and_defensive_thumb.png" alt="Course"></img>
                        <div class="recommended-course-details card-body">
                            <div class="recommended-course-title">Offensive and Defensive Programming</div>
                            <div class="recommended-course-text mb-3">The Offensive and Defensive Programming course bundle covers a wide range of topics that are essential for software engineers, security professionals, and system administrators. Students will learn how to build full-stack web applications, work with legacy systems, develop and secure APIs, program advanced networking features using sockets, and automate tasks using Python on the command line</div>
                            <a class="recommended-course-link" href="/course?p=Offensive+and+Defensive+Programming">Enroll Now<span><img loading="lazy" src={doubleArrow} alt="double-arrow"/></span></a>
                        </div>
                    </div>
                                        <div class="swiper-slide card">
                        <img loading="lazy" class="recommended-course-img card-image-top" src="https://s3.selfmade.ninja/portal-assets/SNA Thumbnail/lahtp_legacy_thumb.png" alt="Course"></img>
                        <div class="recommended-course-details card-body">
                            <div class="recommended-course-title">LAHTP - LEGACY</div>
                            <div class="recommended-course-text mb-3">This course teaches programming skills for ethical hacking, covering network scanning, vulnerability assessment, and exploit development techniques. Students will learn how to identify and exploit vulnerabilities in computer systems and how to protect against them.</div>
                            <a class="recommended-course-link" href="/course?p=LAHTP+-+LEGACY">Enroll Now<span><img loading="lazy" src={doubleArrow} alt="double-arrow"/></span></a>
                        </div>
                    </div>
                                        <div class="swiper-slide card">
                        <img loading="lazy" class="recommended-course-img card-image-top" src="https://s3.selfmade.ninja/portal-assets/SNA Thumbnail/lahtp_adv_thumb.png" alt="Course"></img>
                        <div class="recommended-course-details card-body">
                            <div class="recommended-course-title">LAHTP Advance</div>
                            <div class="recommended-course-text mb-3">This course teaches programming concepts for building security tools, exploits, and hacking thought processes. This course progresses beyond basic tools and focuses on understanding their inner workings, using programming to achieve this.</div>
                            <a class="recommended-course-link" href="/course?p=LAHTP+Advance">Enroll Now<span><img loading="lazy" src={doubleArrow} alt="double-arrow"/></span></a>
                        </div>
                    </div>
                                        <div class="swiper-slide card">
                        <img loading="lazy" class="recommended-course-img card-image-top" src="https://s3.selfmade.ninja/portal-assets/SNA Thumbnail/iot_thumb.png" alt="Course"></img>
                        <div class="recommended-course-details card-body">
                            <div class="recommended-course-title">Internet of Things (IoT)</div>
                            <div class="recommended-course-text mb-3">This course provides an overview of IoT concepts, technologies and their applications, with a focus on practical implementation and real-world examples. Students will learn about sensors, connectivity options, and cloud computing to build IoT systems.</div>
                            <a class="recommended-course-link" href="/course?p=Internet+of+Things+%28IoT%29">Enroll Now<span><img loading="lazy" src={doubleArrow} alt="double-arrow"/></span></a>
                        </div>
                    </div>
                                        <div class="swiper-slide card">
                        <img loading="lazy" class="recommended-course-img card-image-top" src="https://s3.selfmade.ninja/portal-assets/SNA Thumbnail/full_stack_thumb.png" alt="Course"></img>
                        <div class="recommended-course-details card-body">
                            <div class="recommended-course-title">Full-Stack Web Engineering</div>
                            <div class="recommended-course-text mb-3">This course teaches the fundamental concepts of web development, including languages, databases, and frameworks. Students will work on hands-on projects, with an emphasis on testing and deployment to cloud platforms. By the end of the course, students will have gained the skills necessary to develop and deploy functional and scalable web applications.</div>
                            <a class="recommended-course-link" href="/course?p=Full-Stack+Web+Engineering">Enroll Now<span><img loading="lazy" src={doubleArrow} alt="double-arrow"/></span></a>
                        </div>
                    </div>
                                        <div class="swiper-slide card">
                        <img loading="lazy" class="recommended-course-img card-image-top" src="https://s3.selfmade.ninja/portal-assets/SNA Thumbnail/ctm_thumb.png" alt="Course"></img>
                        <div class="recommended-course-details card-body">
                            <div class="recommended-course-title">Cyber Tech Mastery</div>
                            <div class="recommended-course-text mb-3">The Cyber Tech Mastery bundle includes three courses, LAHTP Legacy, LAHTP Advanced, and Advanced Web Hacking, providing a pathway to cybersecurity mastery. This bundle enhances your ethical hacking programming skills, delves into security tool creation, and advances your web application security expertise. Through theory and hands-on exercises, you'll learn to identify, exploit, and mitigate security vulnerabilities, becoming a key asset in the cybersecurity domain.</div>
                            <a class="recommended-course-link" href="/course?p=Cyber+Tech+Mastery">Enroll Now<span><img loading="lazy" src={doubleArrow} alt="double-arrow"/></span></a>
                        </div>
                    </div>
                                        <div class="swiper-slide card">
                        <img loading="lazy" class="recommended-course-img card-image-top" src="https://s3.selfmade.ninja/portal-assets/SNA Thumbnail/bug_hunter_thumb.png" alt="Course"></img>
                        <div class="recommended-course-details card-body">
                            <div class="recommended-course-title">SNA Labs Pro Bug Hunter</div>
                            <div class="recommended-course-text mb-3">This course teaches students how to identify, report, and fix security vulnerabilities in web applications. Additionally, it covers the responsible disclosure of security flaws through bug bounty programs, and how to earn rewards for successful reporting. By the end of the course, students will be able to effectively identify and mitigate security threats in web applications.</div>
                            <a class="recommended-course-link" href="/course?p=SNA+Labs+Pro+Bug+Hunter">Enroll Now<span><img loading="lazy" src={doubleArrow} alt="double-arrow"/></span></a>
                        </div>
                    </div>
                                </div>
        </div>
        <div class="nav-button nav-button__right" id="recommended-courses-nav-right">
            <i class="bi bi-arrow-right-circle-fill fs-1 shadow-lg"></i>
        </div>
    </div>
</div>

{/* <!-- Our Course Mentors --> */}
<div class="bg-dark about-mentor-container auto-layout auto-layout-padding">
    <div class="about-mentor-title">
        <div class="front-line"></div>
        <h2 class="section-title title title-font">Selfmade <span class="text-main">Mentor</span></h2>
    </div>
    <div class="swiper about-mentor-swiper swiper-pointer-events">
        <div class="swiper-wrapper">
                            <div class="swiper-slide" style={{width: '1239px'}}>
                    <div class="about-mentor-wrapper">
                        <div class="mentor-profile">
                            <div class="mentor-pic-group">
                                <img class="mentor-pic" src={instructor3} loading="lazy" alt="instructor image"></img>
                                <div class="mentor-pic-background"></div>
                                <div class="mentor-pic-background"></div>
                            </div>
                            <div class="nav-btn" id="swiper-nextbtn"><img src={chevronRight} alt="Next"/></div>
                            <div class="nav-btn" id="swiper-prevbtn"><img src={chevronLeft} alt="Prev"/></div>
                        </div>
                        <div class="mentor-details">
                            <div class="mentor-content">
                                <h3 class="mentor-name">Hi, My name is <span class="text-main">Sibidharan Nandhakumar</span>, I am your mentor</h3>
                                <div class="mentor-introduction">
                                    <h4 class="text-main title">Introduction</h4>
                                    <p class="text-secondary mentor-text-value">Sibidharan is a highly experienced with over 15+ years and knowledgeable course mentor, With a background in IoT, Web Application and Cybersecurity. Sibidharan has a deep understanding of the subject matter and is able to provide students with practical and valuable guidance throughout their learning journey.</p>
                                </div>
                                <div class="mentor-status">
                                    <h5 class="text-main">Founder of Selfmade Ninja Academy</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                            <div class="swiper-slide" style={{width: '1239px'}}>
                    <div class="about-mentor-wrapper">
                        <div class="mentor-profile">
                            <div class="mentor-pic-group">
                                <img class="mentor-pic" src={instructor2} loading="lazy" alt="instructor image"></img>
                                <div class="mentor-pic-background"></div>
                                <div class="mentor-pic-background"></div>
                            </div>
                            <div class="nav-btn" id="swiper-nextbtn"><img src={chevronRight} alt="Next"/></div>
                            <div class="nav-btn" id="swiper-prevbtn"><img src={chevronLeft} alt="Prev"/></div>
                        </div>
                        <div class="mentor-details">
                            <div class="mentor-content">
                                <h3 class="mentor-name">Hi, My name is <span class="text-main">Nishaanth</span>, I am your mentor</h3>
                                <div class="mentor-introduction">
                                    <h4 class="text-main title">Introduction</h4>
                                    <p class="text-secondary mentor-text-value">I have a seasoned security professional with 8+ 
years of work experience in the fields of application 
security, exploit development and cloud security. </p>
                                </div>
                                <div class="mentor-status">
                                    <h5 class="text-main">Red Team</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                            <div class="swiper-slide" style={{width: '1239px'}}>
                    <div class="about-mentor-wrapper">
                        <div class="mentor-profile">
                            <div class="mentor-pic-group">
                                <img class="mentor-pic" src={instructor1} loading="lazy" alt="instructor image"></img>
                                <div class="mentor-pic-background"></div>
                                <div class="mentor-pic-background"></div>
                            </div>
                            <div class="nav-btn" id="swiper-nextbtn"><img src={chevronRight} alt="Next"/></div>
                            <div class="nav-btn" id="swiper-prevbtn"><img src={chevronLeft} alt="Prev"/></div>
                        </div>
                        <div class="mentor-details">
                            <div class="mentor-content">
                                <h3 class="mentor-name">Hi, My name is <span class="text-main">Manoj Kumar</span>, I am your mentor</h3>
                                <div class="mentor-introduction">
                                    <h4 class="text-main title">Introduction</h4>
                                    <p class="text-secondary mentor-text-value">I have been in the electronics industry since the age of 
17. I have experience doing design and development 
business around Embedded systems design for some 
of the biggest brands and start-ups.
</p>
                                </div>
                                <div class="mentor-status">
                                    <h5 class="text-main">Founder of Electrolance</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
        <div class="nav-btn-groups">
            <div class="nav-btn-wrapper">
                <div class="nav-btn-item" id="swiper-prevbtn"><img src={circleLeft} alt="Prev"/></div>
                <div class="about-mentor-pagination"></div>
                <div class="nav-btn-item" id="swiper-nextbtn"><img src={circleRight} alt="Next"/></div>
            </div>
        </div>
    </div>
</div>

{/* <!-- student feedback --> */}
<div class="student-feedback-wrapper auto-layout auto-layout-padding">
    <div class="student-feedback-img-group col-lg-5">
        <div class="student-feedback-img-item">
            <img loading="lazy" src={venkyStudent} alt="student" class="student-feedback-img floating"/>
            <img loading="lazy" src={vijayStudent} alt="student" class="student-feedback-img floating"/>
        </div>
        <div class="student-feedback-img-item">
            <img loading="lazy" src={hariStudent} alt="student" class="student-feedback-img floating"/>
        </div>
        <div class="student-feedback-img-item">
            <img loading="lazy" src={krithikStudent} alt="student" class="student-feedback-img floating"/>
            <img loading="lazy" src={rajithStudent} alt="student" class="student-feedback-img floating"/>
        </div>
    </div>
    <div class="student-feedback-review-swiper swiper col-lg-7">
        <h2 class="student-feedback-title section-title title-font">Student <span class="text-main">Feedback</span></h2>
        <div class="swiper-wrapper">
            <div class="swiper-slide student-style-1">
                <p class="student-feedback-text">
                    I am Krithik and studying class 10. I joined SNA when I was 13, SNA helped me gain an interest in programming during the lockdown. Sibi anna encouraged me and easily taught complex concepts. SNA labs made it easier to understand Linux and work in an integrated environment. SNA taught me the thought process needed to become a hacker. Confidence, interest, and patience are important in the IT field.
                </p>
                <div class="student-feedback-profile">
                    <img src={krithikStudent} alt="student-pic" class="student-feedback-profile-pic" loading="lazy"></img>
                    <div class="student-feedback-details">
                        <h3 class="student-feedback-name">Krithik</h3>
                        <h4 class="student-feedback-course-name">Internet Of Things</h4>
                    </div>
                </div>
            </div>
            <div class="swiper-slide student-style-2">
                <p class="student-feedback-text">SNA is the best platform to learn current technology up-to-date,
                    And I'm learning Sibi Anna's 14+ years of experience in this one course,
                    In SNA I'm learning a lot of new technology and while learning this new technology I'm getting new ideas to make a new product.
                    This platform teaches me how to learn on my own.</p>
                <div class="student-feedback-profile">
                    <img src={rajithStudent} alt="student-pic" class="student-feedback-profile-pic" loading="lazy"></img>
                    <div class="student-feedback-details">
                        <h3 class="student-feedback-name">Rajithlingam</h3>
                        <h4 class="student-feedback-course-name">LAHTP Student</h4>
                    </div>
                </div>
            </div>
            <div class="swiper-slide student-style-3">
                <p class="student-feedback-text">Web engineering teaches things that are not typically taught in institutes or academies. It's hard to believe how much I learned in just 3 months. Sibi bro taught us industry standards and the tools used in companies. The lab was very useful, and I believe I learned everything about the internet. I feel ready for job placements.</p>
                <div class="student-feedback-profile">
                    <img src={hariStudent} alt="student-pic" class="student-feedback-profile-pic" loading="lazy"></img>
                    <div class="student-feedback-details">
                        <h3 class="student-feedback-name">Hariharan Ravi</h3>
                        <h4 class="student-feedback-course-name">Full Stack Web Engineering Student</h4>
                    </div>
                </div>
            </div>
            <div class="swiper-slide student-style-4">
                <p class="student-feedback-text">It can't explain by words so full-fledged labs. We are very lucky to be part of SNA because of the labs, knowledge, and strong community that we made. SNA labs are the perfect labs where everyone can practice from scratch to a high level.</p>
                <div class="student-feedback-profile">
                    <img src={venkyStudent} alt="student-pic" class="student-feedback-profile-pic" loading="lazy"></img>
                    <div class="student-feedback-details">
                        <h3 class="student-feedback-name">Venkatesh M</h3>
                        <h4 class="student-feedback-course-name">Iot Student</h4>
                    </div>
                </div>
            </div>
            <div class="swiper-slide student-style-5">
                <p class="student-feedback-text">I had never experienced this kind of teaching in my life. Your teaching is awesome and you changed my way of thinking. Tq bro.</p>
                <div class="student-feedback-profile">
                    <img src={vijayStudent} alt="student-pic" class="student-feedback-profile-pic" loading="lazy"></img>
                    <div class="student-feedback-details">
                        <h3 class="student-feedback-name">Vijayan R</h3>
                        <h4 class="student-feedback-course-name">LAHTP Student</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="student-feedback-pagination-wrapper">
            <div class="student-feedback-pagination-container">
                <div class="student-feedback-sm-nav-btn" id="student-feedback-prev-btn"><img src={chevronLeft} alt="Next"/></div>
                <div class="student-feedback-lg-nav-btn" id="student-feedback-prev-btn"><img src={arrowLeft} alt="Next"/></div>
                <div class="student-feedback-pagination"></div>
                <div class="student-feedback-sm-nav-btn" id="student-feedback-next-btn"><img src={chevronRight} alt="Perv"/></div>
                <div class="student-feedback-lg-nav-btn" id="student-feedback-next-btn"><img src={arrowRight} alt="Perv"/></div>
            </div>
        </div>
    </div>
    <img loading="lazy" src={feedbackPng} alt="Feedback" class="feedback-side-banner"/>
</div>

</>
    )
}

export default Main;