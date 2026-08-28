export type GvmPageData = { title: string; kicker: string; lead: string; image: string; sections: { heading: string; text: string[]; bullets?: string[] }[] };

export const imageUrls = {
  home: 'https://static.wixstatic.com/media/50b71e_11b275ce06e24c71b8b2ab48adf248b2~mv2.png/v1/fill/w_1200,h_800,al_c,q_85,usm_0.66_1.00_0.01/50b71e_11b275ce06e24c71b8b2ab48adf248b2~mv2.png',
  campus: 'https://static.wixstatic.com/media/944c0d_b858a742947a464ca51951a3f921d16d~mv2.jpg/v1/fill/w_1200,h_650,al_c,q_85,usm_0.66_1.00_0.01/gvm2_edited.jpg',
  activities: 'https://static.wixstatic.com/media/944c0d_bd407133b507408dbd97488a4ab2210b~mv2.png/v1/fill/w_900,h_800,al_c,q_85,usm_0.66_1.00_0.01/Annotation%202020-04-01%20184903.png',
  gaushala: 'https://static.wixstatic.com/media/b57ab2_b8e362749d424fbd87f7d93b411865a0~mv2.jpg/v1/fill/w_900,h_800,al_c,q_85,usm_0.66_1.00_0.01/img.jpg',
  founder: 'https://static.wixstatic.com/media/944c0d_8de86fc85a294f62a645ba204a1df16f~mv2.jpg/v1/fill/w_700,h_900,al_c,q_85,usm_0.66_1.00_0.01/photo14.jpg',
};

export const pages: Record<string, GvmPageData> = {
  about: { kicker: 'ABOUT GVM', title: 'An oasis of learning in the Thar Desert.', lead: 'Founded in 1950 at Sardarshahr, Gandhi Vidya Mandir brings education, service and rural development together in one enduring institution.', image: imageUrls.campus, sections: [
    { heading: 'Introduction', text: ['GVM grew on 1,200 acres in a challenging desert region of Rajasthan. Its programmes address education, culture, livelihood, health, hygiene and vocational learning without discrimination.', 'The campus serves learners from pre-primary level to doctoral study, while its schools, colleges, research facilities, hostels and community programmes create a complete learning environment.'] },
    { heading: 'Our vision', text: ['GVM believes higher education must be socially relevant, career-oriented and grounded in the realities of the nation. Humanistic values, ethics and responsibility are integral to education.', 'Its wider commitment extends to social and rural welfare, disaster relief, non-formal education and village-based vocational training.'] },
    { heading: 'Essence of GVM', text: ['GVM’s watchword is Service with Sincerity. Its motto, Gyan-bhanur-bhasatam, expresses the hope that the sun of knowledge may shine for everyone.', 'The institution upholds Gandhian ideals of ahimsa, sarvodaya and universal brotherhood.'] },
  ] },
  activities: { kicker: 'ACTIVITIES', title: 'Education, health, livelihood and rural welfare.', lead: 'GVM’s activity spectrum connects formal education with community programmes across Rajasthan.', image: imageUrls.activities, sections: [
    { heading: 'Education, research & extension', text: ['GVM includes IASE Deemed University, distance education, Ayurvedic medical education, engineering, life sciences, IT, management, physiotherapy, veterinary studies and women’s colleges.'], bullets: ['Teacher education from certificate courses to Ph.D.', 'Krishi Vigyan Kendra training for farmers', 'Schools, open learning, libraries, hostels and sports facilities', 'Village literacy, adult education and mobile libraries'] },
    { heading: 'Health', text: ['Health and medical centres, village camps, an indoor hospital, mobile dispensary and rural ambulance service serve communities in and around Sardarshahr.'], bullets: ['Medical and sanitation education in rural communities', 'Free health check-ups and outreach camps', 'Support for socially and economically disadvantaged groups'] },
    { heading: 'Economic & rural development', text: ['GVM works with farmers, self-help groups and village institutions to strengthen livelihoods, water conservation and community capability.'], bullets: ['Agriculture demonstrations and improved seed distribution', 'Vocational training and self-help groups', 'Rainwater harvesting and drinking water programmes', 'Disaster relief and social-welfare initiatives'] },
  ] },
  gaushala: { kicker: 'GAU SHALA', title: 'Care, treatment and dignity for cattle.', lead: 'GVM’s Gau Shala supports care for cows through veterinary attention, Ayurvedic support, nutrition and local outreach.', image: imageUrls.gaushala, sections: [
    { heading: 'Work at the Gau Shala', text: ['The Gau Shala has admitted and cared for abandoned and ill cattle, supported by dedicated staff and a combination of allopathic and Ayurvedic care.'], bullets: ['Round-the-clock treatment and care', 'Ayurvedic medicines and nutritional feed', 'In-house breeding and cattle-care support', 'Milk used for students and welfare homes; surplus made into ghee'] },
    { heading: 'How support helps', text: ['Donations help expand treatment capacity, provide feed and medicine, and extend veterinary support to cattle in need.'] },
  ] },
  'bal-griha': { kicker: 'BAL GRIHA', title: 'A family-like home for children in need.', lead: 'Established in 1976, Bal Griha provides shelter, education, health support and values-based care for destitute children.', image: imageUrls.founder, sections: [
    { heading: 'Purpose', text: ['Bal Griha focuses on the holistic development of children in an environment centred on human values, education and self-reliance.'], bullets: ['Shelter, food, health care and education', 'Yoga, sports, cultural activities and value education', 'Library, computer access and academic support', 'Family-like routines, prayer and a discrimination-free environment'] },
    { heading: 'How to help', text: ['Supporters can contribute towards education, nutrition, clothing, training and care for children.'] },
  ] },
  team: { kicker: 'OUR TEAM', title: 'Service in action.', lead: 'GVM honours the doctors, educators, staff and volunteers who have served communities during times of need.', image: imageUrls.activities, sections: [
    { heading: 'An inspirational team', text: ['GVM’s healthcare and academic teams have provided sustained service during public-health emergencies, caring for patients and supporting community wellbeing.', 'Their work reflects the institution’s belief that learning and service belong together.'] },
    { heading: 'A shared commitment', text: ['Across the campus and outreach programmes, staff and volunteers contribute to education, health, relief work and rural development.'] },
  ] },
  news: { kicker: 'NEWS & ANNOUNCEMENTS', title: 'Updates from Gandhi Vidya Mandir.', lead: 'Follow GVM’s official announcements, campus updates and community activities.', image: imageUrls.campus, sections: [
    { heading: 'Official updates', text: ['For current news, events and announcements, please visit the official Gandhi Vidya Mandir website.'] },
    { heading: 'Stay connected', text: ['GVM shares updates on education, outreach, health and social-service initiatives through its official channels.'] },
  ] },
  contact: { kicker: 'CONTACT', title: 'Connect with Gandhi Vidya Mandir.', lead: 'For admissions, services, campus information or general correspondence, reach the central office in Sardarshahr.', image: imageUrls.campus, sections: [
    { heading: 'Central office', text: ['Gandhi Vidya Mandir, Sardarshahr, Churu – 331401, Rajasthan, India.', 'Email: gvmcentraloffice@gmail.com', 'Phone: 01564-220025 / 223642 / 223054'] },
    { heading: 'Campus community', text: ['GVM’s campus includes IASE Deemed University, schools, medical and Ayurvedic facilities, Krishi Vigyan Kendra, hostels, welfare homes and many academic departments.'] },
  ] },
  'support-us': { kicker: 'SUPPORT US', title: 'Help education serve humanity.', lead: 'Your support strengthens education, health, rural welfare, care for children and compassionate community work.', image: imageUrls.home, sections: [
    { heading: 'Why support GVM', text: ['GVM’s work extends from classrooms to villages, welfare homes, medical services, disaster response and educational opportunity for people in need.'] },
    { heading: 'Contribute', text: ['Visit the official support page to explore current donation options and help carry forward the mission of education with social commitment.'] },
  ] },
};
