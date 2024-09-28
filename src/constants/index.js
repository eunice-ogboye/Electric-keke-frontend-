const getHeroImage = (type) => {
  return type === "main"
    ? "/hero_bg1.png"
    : type === "about"
    ? "/hero/about_hero.png"
    : type === "earn"
    ? "/earn_hero_bg.png"
    : "/support_bg.png";
};

const account_types = [
  { title: "Passenger", icon: "/avatars/passenger.svg", role: "User" },
  { title: "Rider", icon: "/avatars/rider.svg", role: "Rider" },
];

const briefs = {
  register:
    "Sign up to start your eco-friendly journey with EcoRide. Join us in making transportation greener and more efficient. Your adventure towards a sustainable future begins here!",
  complete:
    "Complete your profile to unlock the full EcoRide experience. Help us personalize your journey and enhance your eco-friendly rides.",
  otpMethod:
    "Choose where you will like to receive your OTP, via Phone number or Gmail. This step helps secure your EcoRide account.",
  verification:
    "Enter the OTP sent to your phone to verify your account. This ensures your Eco-Ride is secure and personalized. your safety is our priority.",
  congrats:
    "Congratulations on successfully signing up for EcoRide! please proceed to login and start your eco-friendly journey with us.",
  login:
    "Welcome to Eco-Ride join us in making a difference by choosing sustainable transportation. Login to start your eco-friendly journey today!",
  forget:
    "Reset your password to regain access to your Eco-Ride account. we’ll send a code to your email oe phone number to help you get back on track.",
  new: "Create a new password for your Eco-Ride account. Ensure it is strong and secure to protect your information.",
  passUpdate:
    "Enter the code sent to your chosen email or phone number to reset your password. This helps us verify your identity and secure your Eco-Ride account.",
};

const otp_choice = [
  { title: "Sms", icon: "/phone.svg" },
  { title: "Email", icon: "/email.svg" },
];

const about_titles = {
  one: "Who We Are",
  two: "Discover The Full Range Of Eco-Ride Services",
};

const about_descriptions = {
  one: "By choosing eco-rides, you're opting for vehicles that prioritize the environment, like our electric Kekes, which produce zero emissions and significantly reduce your carbon footprint.",
  two: "Eco-Ride isn’t just about getting from point A to point B—it's about redefining how we move and deliver in a way that’s both sustainable and efficient",
  three:
    "Eco-Ride is a forward-thinking transport and logistics service that puts the environment first. We operate electric Keke vehicles, providing both ride-hailing and delivery services that are affordable, efficient, and eco-friendly. At Eco-Ride, we believe in creating a sustainable future by reducing carbon emissions and improving air quality in our cities.",
};

const services = [
  {
    title: "Book a Ride",
    desc: "With Eco-Ride, booking a ride is as easy as a few taps.",
    icon: "/ride.svg",
  },
  {
    title: "Request a Delivery",
    desc: "Eco-Ride’s delivery service is swift and dependable, ensuring your items reach their destination on time.",
    icon: "/delivery.svg",
  },
  {
    title: "Schedule a Ride or Delivery",
    desc: "With Eco-Ride, you can schedule your rides and deliveries in advance.",
    icon: "/schedule.svg",
  },
  {
    title: "Cost Effective Solutions",
    desc: "Enjoy competitive pricing on all our services, making eco-friendly travel and deliveries accessible to everyone.",
    icon: "/cost.svg",
  },
];

const mission = {
  title: "Our Vision for a Sustainable Future",
  desc: "At Eco-Ride, our mission is clear: to revolutionize urban transportation and logistics with eco-friendly solutions that benefit both people and the planet. We aim to make sustainable transport accessible and affordable for everyone, reducing our carbon footprint while enhancing the quality of life in our communities.",
  statement:
    "By expanding our fleet of electric Kekes, we aim to make every journey  a step towards a greener future, reducing missions and improving air quality in our cities",
};

const testimonial_title = {
  main: "What They Say About Us",
  earn: "What our Riders Say",
};

const testimonies = {
  main: [
    {
      name: "Tolu A",
      photo: "/persons/tolu.png",
      testimony:
        "Eco-Ride has completely changed the way I get around the city. Not only are the rides comfortable and affordable, but knowing that I'm helping reduce emissions makes it even better. I’m proud to be part of this eco-friendly movement!",
      location: "Lagos, Nigeria",
    },
    {
      name: "Ahryson",
      photo: "/persons/tolu.png",
      testimony: "I am the Designer",
      location: "Lokoja, Nigeria",
    },
    {
      name: "Emem",
      photo: "/persons/tolu.png",
      testimony: "I am the project manager",
      location: "Lokoja, Nigeria",
    },
  ],
  earn: [
    {
      name: "Adewale O",
      photo: "/persons/adewale.png",
      testimony:
        "Driving with Eco-Ride has been a game-changer for me. The app is easy to use, and I love that I’m contributing to a greener environment. Plus, the flexible schedule allows me to balance work with my personal life. I’m proud to be part of this eco-friendly movement!",
      location: "Lagos, Nigeria",
    },
    {
      name: "Ahryson",
      photo: "/persons/tolu.png",
      testimony: "I am the Designer",
      location: "Lokoja, Nigeria",
    },
    {
      name: "Emem",
      photo: "/persons/tolu.png",
      testimony: "I am the project manager",
      location: "Lokoja, Nigeria",
    },
  ],
  support: [],
};

const connected = {
  title: "Stay Connected with Eco-Ride",
  desc: "Don't miss out on the latest updates, exclusive offers, and insights into how we're driving the future of eco-friendly transportation and logistics",
};

const socials = [
  {
    title: "facebook",
    icon: "/socials/facebook.svg",
  },
  {
    title: "x",
    icon: "/socials/x.svg",
  },
  {
    title: "whatsapp",
    icon: "/socials/whatsapp.svg",
  },
  {
    title: "instagram",
    icon: "/socials/instagram.svg",
  },
];

const care_socials = [
  {
    title: "Facebook",
    icon: "/facebook.svg",
  },
  {
    title: "Twitter",
    icon: "/twitter.svg",
  },
  {
    title: "Whatsapp",
    icon: "/whatsapp.svg",
  },
  {
    title: "Instagram",
    icon: "/instagram.svg",
  },
];

const earn_requirements = [
  "Minimum age at least 22 years old",
  "Valid drivers license.",
  "Background check, successful completion of a background check.",
  "Smartphone capable of running the ecoride app.",
  "Driving experience minimum of one year .",
  "Clean driving record with no major violation.",
  "Training completion of ecoride program.",
];

const contribution = {
  title: "How our drivers contribute to the greener environment.",
  desc: "By driving with ecoride, our drivers play a vital role in promoting a greener environment. Through eco-friendly transportation practices, like using electric or hybrid vehicles, carpooling and reducing carbon emission, ecoride drivers actively contribute to sustainable mobility and help reduce ecological footprint on our planet. Joining ecoride not only offers drivers a chance to earn but allows them to be eco-warrior making a positive impact on the environment with everyday ride.",
};

const nav_links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Earn With Us", href: "/earn-with-us" },
  { title: "Support", href: "/support" },
];

const formTitle = {
  register: "Register Your Account!",
  complete: "Complete Your Profile!",
  otpMethod: "OTP!",
  verification: "Complete Your Profile!",
  congrats: "Continue to Log in",
  login: "Log in to your Account",
  forget: "Forgot Password",
  new: "Enter New Password",
  update: "Enter Code",
};

const support_links = ["General", "Account", "Payment", "Services"];

const footer_note =
  "Eco-Ride is more than just a service—it's a movement towards a more sustainable and efficient future.Whether you're booking a ride, sending a package, or planning ahead, Eco-Ride is here to meet your needs while caring for the planet";

const settings = [
  { title: "Profile Management" },
  { title: "Payment Method" },
  { title: "Notification", href: "/notification" },
  { title: "Security & Privacy" },
  { title: "Support & Feedback" },
  { title: "Delete Account" },
];

const hero_descriptions = {
  main: " Join the Green Movement with Our Electric Keke: Real-time tracking, affordable pricing—making your life easier and the planet healthier.",
  about: "",
  earn: "By joining us as a driver, you will enjoy flexible working hours, competitive earnings, and the opportunity to contribute to a greener enviroment. Drive with us and be part of eco-friendly revolution.",
  support:
    " Have a question or need assistance? Our support team is ready to help you with any issue, big or smal",
};

const admin_nav_links = [
  { title: "Overview", href: "/admin", icon: "/users/overview.svg" },
  {
    title: "User Management",
    href: "user-management",
    icon: "/users/user-management.svg",
  },
  {
    title: "Financial Management",
    href: "financial-management",
    icon: "/users/finance.svg",
  },
  {
    title: "Settings",
    href: "settings",
    icon: "/users/setting.svg",
  },
];

const user_dashboard = [
  {
    title: "Active Users",
    analysisDigits: 2399,
    percent: 20,
    icon: "/users/users.svg",
  },
  {
    title: "Total Rides",
    analysisDigits: "3000",
    percent: 20,
    icon: "/users/rides.svg",
  },
  {
    title: "Total Deliveries",
    analysisDigits: 298,
    percent: 20,
    icon: "/users/deliveries.svg",
  },
  {
    title: "Disabled Users",
    analysisDigits: 22,
    percent: 20,
    icon: "/users/disabled.svg",
  },
];

const finance_management_tablehead = [
  {
    title: "Transaction No",
    tableClass: "col-span-2 px-2",
  },
  {
    title: "Status",
    tableClass: "col-span-1 justify-self-center px-2",
  },
  {
    title: "Name",
    tableClass: "col-span-3 justify-self-start px-2",
  },
  {
    title: "Date",
    tableClass: "col-span-1 justify-self-start px-2",
  },
  {
    title: "Rides",
    tableClass: "col-span-1 justify-self-start px-2",
  },
  {
    title: "Action",
    tableClass: "col-span-1 px-2",
  },
];

const user_management_tablehead = [
  {
    title: "User Id",
    tableClass: "col-span-1",
  },
  {
    title: "Name",
    tableClass: "col-span-3 justify-self-start",
  },
  {
    title: "Sign Up Date",
    tableClass: "col-span-2 justify-self-start",
  },
  {
    title: "Status",
    tableClass: "col-span-2 justify-self-start",
  },
  {
    title: "Action",
    tableClass: "col-span-1",
  },
];

const overview_titles = {
  Overview: "Dashboard Overview",
  "User Management": "Manage Users",
  "Financial Management": "Financial Management",
};

const overview_descriptions = {
  Overview: "Manage Users and Track Services",
  "User Management": "Manage Users",
  "Financial Management": "Keep Track With Finance",
};

const flexibility_text =
  "At EcoRide, we understand the importance of work-life balance. That is why we offer flexible working hours, allowing you to choose your own schedule. whether you prefer to drive during the day, night, or just weekends, the choice is entirely yours.";

const stand_out_text =
  "Our mission is simple, to revolutionize urban transportation by providing electric, zero-emission rides and deliveries that are accessible to everyone. We envision a future where eco-friendly transport is the standard, not the exception. By expanding our services and fleet, we hope to play a pivotal role in promoting greener cities and healthier communities for generations to come.";

export {
  about_titles,
  about_descriptions,
  account_types,
  admin_nav_links,
  briefs,
  care_socials,
  connected,
  contribution,
  earn_requirements,
  finance_management_tablehead,
  flexibility_text,
  footer_note,
  formTitle,
  getHeroImage,
  hero_descriptions,
  mission,
  nav_links,
  otp_choice,
  overview_titles,
  overview_descriptions,
  services,
  settings,
  socials,
  stand_out_text,
  support_links,
  testimonial_title,
  testimonies,
  user_dashboard,
  user_management_tablehead,
};
