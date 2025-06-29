// Images configuration for the WIE ISIMM website
export const aboutImages = {
  // Mission & Vision section image
  mission: {
    src: "/images/about/mission-vision.jpg", // You'll add this image
    alt: "WIE ISIMM Mission and Vision",
    width: 600,
    height: 500,
    className: "relative rounded-3xl shadow-2xl object-cover",
  },
  
  // Photo Gallery images - you can add up to 12 images
  gallery: [
    {
      src: "/images/about/gallery-1.jpg", // Event/Activity 1
      alt: "WIE ISIMM Event 1",
      title: "Leadership Workshop",
      width: 300,
      height: 300,
    },
    {
      src: "/images/about/gallery-2.jpg", // Event/Activity 2
      alt: "WIE ISIMM Event 2", 
      title: "Coding Workshop",
      width: 300,
      height: 300,
    },
    {
      src: "/images/about/gallery-3.jpg", // Event/Activity 3
      alt: "WIE ISIMM Event 3",
      title: "Networking Event",
      width: 300,
      height: 300,
    },
    {
      src: "/images/about/gallery-4.jpg", // Event/Activity 4
      alt: "WIE ISIMM Event 4",
      title: "Career Development",
      width: 300,
      height: 300,
    },
    {
      src: "/images/about/gallery-5.jpg", // Event/Activity 5
      alt: "WIE ISIMM Event 5",
      title: "Innovation Challenge",
      width: 300,
      height: 300,
    },
    {
      src: "/images/about/gallery-6.jpg", // Event/Activity 6
      alt: "WIE ISIMM Event 6",
      title: "Mentorship Program",
      width: 300,
      height: 300,
    },
    {
      src: "/images/about/gallery-7.jpg", // Event/Activity 7
      alt: "WIE ISIMM Event 7",
      title: "Team Building",
      width: 300,
      height: 300,
    },
    {
      src: "/images/about/gallery-8.jpg", // Event/Activity 8
      alt: "WIE ISIMM Event 8",
      title: "Technical Workshop",
      width: 300,
      height: 300,
    },
    {
      src: "/images/about/gallery-9.jpg", // Event/Activity 9
      alt: "WIE ISIMM Event 9",
      title: "Community Outreach",
      width: 300,
      height: 300,
    },
    {
      src: "/images/about/gallery-10.jpg", // Event/Activity 10
      alt: "WIE ISIMM Event 10",
      title: "Award Ceremony",
      width: 300,
      height: 300,
    },
    {
      src: "/images/about/gallery-11.jpg", // Event/Activity 11
      alt: "WIE ISIMM Event 11",
      title: "Conference Participation",
      width: 300,
      height: 300,
    },
    {
      src: "/images/about/gallery-12.jpg", // Event/Activity 12
      alt: "WIE ISIMM Event 12",
      title: "Annual Meeting",
      width: 300,
      height: 300,
    },
  ],
} as const

// Homepage images configuration
export const homeImages = {
  // Hero section image
  hero: {
    src: "/images/home/hero_image.jpg", // Updated to match actual filename
    alt: "WIE ISIMM Members",
    width: 600,
    height: 500,
    className: "relative rounded-3xl shadow-2xl object-cover",
  },
  
  // Recent events preview images
  recentEvents: [
    {
      src: "/images/home/event-1.jpg", // Recent event 1
      alt: "Leadership Workshop",
      title: "Workshop on Leadership",
      description: "Empowering women through leadership skills and professional development.",
      width: 400,
      height: 200,
    },
    {
      src: "/images/home/event-2.jpg", // Recent event 2
      alt: "Coding Workshop",
      title: "Coding Workshop for Beginners",
      description: "An introductory workshop designed to teach basic programming concepts.",
      width: 400,
      height: 200,
    },
    {
      src: "/images/home/event-3.jpg", // Recent event 3
      alt: "Career Development Seminar",
      title: "Career Development Seminar",
      description: "Professional development session covering resume building and interview skills.",
      width: 400,
      height: 200,
    },
  ],
} as const

// Committee images configuration
export const committeeImages = {
  // Committee member photos - Updated with actual WIE ISIMM committee members
  members: [
    {
      name: "Dorra Barbria",
      position: "Chairwoman",
      image: "/images/committee/dorra-barbria.jpg", // You'll add this image
      facebook: "https://facebook.com/dorra.barbria",
      email: "dorra@wie-isimm.org",
      linkedin: "https://linkedin.com/in/dorra-barbria",
    },
    {
      name: "Chifa Guesmi",
      position: "Vice Chair",
      image: "/images/committee/chifa-guesmi.jpg", // You'll add this image
      facebook: "https://facebook.com/chifa.guesmi",
      email: "chifa@wie-isimm.org",
      linkedin: "https://linkedin.com/in/chifa-guesmi",
    },
    {
      name: "Maryem Teborbi",
      position: "Secretary",
      image: "/images/committee/maryem-teborbi.jpg", // You'll add this image
      facebook: "https://facebook.com/maryem.teborbi",
      email: "maryem@wie-isimm.org",
      linkedin: "https://linkedin.com/in/maryem-teborbi",
    },
    {
      name: "Miniar Guizani",
      position: "Treasurer",
      image: "/images/committee/miniar-guizani.jpg", // You'll add this image
      facebook: "https://facebook.com/miniar.guizani",
      email: "miniar@wie-isimm.org",
      linkedin: "https://linkedin.com/in/miniar-guizani",
    },
    {
      name: "Malek Aarfaoui",
      position: "Webmaster",
      image: "/images/committee/malek-aarfaoui.jpg", // You'll add this image
      facebook: "https://facebook.com/malek.aarfaoui",
      email: "malek@wie-isimm.org",
      linkedin: "https://linkedin.com/in/malek-aarfaoui",
    },
  ],
  
  // Chairwoman photo for leadership message section
  chair: {
    src: "/images/committee/dorra-barbria.jpg", // Same as chairwoman's main photo
    alt: "Dorra Barbria - Chairwoman",
    width: 80,
    height: 80,
    className: "w-16 h-16 rounded-full object-cover mr-4",
  },
} as const

// Helper function to get gallery images (with fallback to placeholders)
export const getGalleryImages = () => {
  return aboutImages.gallery.map((image, index) => ({
    ...image,
    // Fallback to placeholder if image doesn't exist
    src: image.src.startsWith('/placeholder') ? image.src : image.src,
  }))
}

// Helper function to get recent events images
export const getRecentEventsImages = () => {
  return homeImages.recentEvents.map((image, index) => ({
    ...image,
    // Fallback to placeholder if image doesn't exist
    src: image.src.startsWith('/placeholder') ? image.src : image.src,
  }))
}

// Helper function to get committee members with fallback images
export const getCommitteeMembers = () => {
  return committeeImages.members.map((member, index) => ({
    ...member,
    // Fallback to placeholder if image doesn't exist
    image: member.image.startsWith('/placeholder') ? member.image : member.image,
  }))
}

// Events images configuration
export const eventsImages = {
  // Event gallery images - you can add up to 17 images for the 6 events
  events: [
    {
      id: 1,
      title: "Women in Tech Leadership Summit",
      description: "A comprehensive summit focusing on leadership development for women in technology fields.",
      date: "2024-03-15",
      location: "ISIMM Campus",
      attendees: 120,
      images: [
        {
          src: "/images/events/event-1.jpg",
          alt: "Women in Tech Leadership Summit - Session 1",
          width: 600,
          height: 400,
        },
        {
          src: "/images/events/event-2.jpg", 
          alt: "Women in Tech Leadership Summit - Session 2",
          width: 600,
          height: 400,
        },
        {
          src: "/images/events/event-3.jpg",
          alt: "Women in Tech Leadership Summit - Networking",
          width: 600,
          height: 400,
        },
      ],
    },
    {
      id: 2,
      title: "Coding Workshop for Beginners",
      description: "An introductory workshop designed to teach basic programming concepts to newcomers.",
      date: "2024-02-28",
      location: "Computer Lab A",
      attendees: 45,
      images: [
        {
          src: "/images/events/event-4.jpg",
          alt: "Coding Workshop - Introduction",
          width: 600,
          height: 400,
        },
        {
          src: "/images/events/event-5.jpg",
          alt: "Coding Workshop - Hands-on Session",
          width: 600,
          height: 400,
        },
        {
          src: "/images/events/event-6.jpg",
          alt: "Coding Workshop - Group Work",
          width: 600,
          height: 400,
        },
      ],
    },
    {
      id: 3,
      title: "Career Development Seminar",
      description: "Professional development session covering resume building, interview skills, and career planning.",
      date: "2024-02-10",
      location: "Main Auditorium",
      attendees: 80,
      images: [
        {
          src: "/images/events/event-7.jpg",
          alt: "Career Development Seminar - Opening",
          width: 600,
          height: 400,
        },
        {
          src: "/images/events/event-8.jpg",
          alt: "Career Development Seminar - Workshop",
          width: 600,
          height: 400,
        },
        {
          src: "/images/events/event-9.jpg",
          alt: "Career Development Seminar - Q&A Session",
          width: 600,
          height: 400,
        },
      ],
    },
    {
      id: 4,
      title: "Networking Night",
      description: "An evening of networking and professional connections with industry leaders.",
      date: "2024-01-25",
      location: "Student Center",
      attendees: 65,
      images: [
        {
          src: "/images/events/event-10.jpg",
          alt: "Networking Night - Welcome Reception",
          width: 600,
          height: 400,
        },
        {
          src: "/images/events/event-11.jpg",
          alt: "Networking Night - Professional Connections",
          width: 600,
          height: 400,
        },
      ],
    },
    {
      id: 5,
      title: "Innovation Challenge",
      description: "A competitive event where teams present innovative solutions to real-world engineering problems.",
      date: "2024-01-12",
      location: "Engineering Building",
      attendees: 90,
      images: [
        {
          src: "/images/events/event-12.jpg",
          alt: "Innovation Challenge - Team Presentations",
          width: 600,
          height: 400,
        },
        {
          src: "/images/events/event-13.jpg",
          alt: "Innovation Challenge - Judging Panel",
          width: 600,
          height: 400,
        },
        {
          src: "/images/events/event-14.jpg",
          alt: "Innovation Challenge - Award Ceremony",
          width: 600,
          height: 400,
        },
      ],
    },
    {
      id: 6,
      title: "Mentorship Program Launch",
      description: "Official launch of our mentorship program connecting students with industry professionals.",
      date: "2023-12-15",
      location: "Conference Room",
      attendees: 35,
      images: [
        {
          src: "/images/events/event-15.jpg",
          alt: "Mentorship Program Launch - Opening Ceremony",
          width: 600,
          height: 400,
        },
        {
          src: "/images/events/event-16.jpg",
          alt: "Mentorship Program Launch - Mentor-Mentee Matching",
          width: 600,
          height: 400,
        },
        {
          src: "/images/events/event-17.jpg",
          alt: "Mentorship Program Launch - Group Photo",
          width: 600,
          height: 400,
        },
      ],
    },
  ],
} as const

// Helper function to get events data with fallback images
export const getEventsData = () => {
  return eventsImages.events.map((event) => ({
    ...event,
    images: event.images.map((image) => ({
      ...image,
      // Fallback to placeholder if image doesn't exist
      src: image.src.startsWith('/placeholder') ? image.src : image.src,
    })),
  }))
} 