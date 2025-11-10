const admin = require('firebase-admin');

const serviceAccount = {
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || 'your-project-id',
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: serviceAccount.projectId,
});

const db = admin.firestore();

async function seedData() {
  console.log('Starting Firestore seed...');

  const internships = [
    {
      id: 'web-dev-fullstack',
      title: 'Full-Stack Web Development',
      domain: 'Web Development',
      description: 'Master modern web development with React, Node.js, and cloud deployment. Build production-ready applications from scratch.',
      duration: '8 weeks',
      instructor: {
        name: 'Sarah Johnson',
        avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=4F46E5&color=fff',
      },
      curriculum: [
        { week: 1, module: 'Frontend Fundamentals', tasks: ['Build responsive UI', 'Learn React basics'], description: 'HTML, CSS, JavaScript essentials' },
        { week: 2, module: 'React Deep Dive', tasks: ['State management', 'Component lifecycle'], description: 'Advanced React patterns' },
        { week: 3, module: 'Backend Development', tasks: ['REST APIs', 'Database design'], description: 'Node.js and Express' },
        { week: 4, module: 'Full-Stack Integration', tasks: ['Connect frontend & backend', 'Authentication'], description: 'Building complete apps' },
      ],
      tools: ['React', 'Node.js', 'MongoDB', 'Git', 'VS Code'],
      difficulty: 'Intermediate',
      status: 'Open',
      enrolledCount: 0,
      batchIds: [],
      createdAt: admin.firestore.Timestamp.now(),
      updatedAt: admin.firestore.Timestamp.now(),
    },
    {
      id: 'data-science-ml',
      title: 'Data Science & Machine Learning',
      domain: 'Data Science',
      description: 'Learn data analysis, visualization, and machine learning. Work with real datasets and build predictive models.',
      duration: '10 weeks',
      instructor: {
        name: 'Dr. Michael Chen',
        avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=10B981&color=fff',
      },
      curriculum: [
        { week: 1, module: 'Python for Data Science', tasks: ['NumPy basics', 'Pandas operations'], description: 'Essential libraries' },
        { week: 2, module: 'Data Visualization', tasks: ['Create charts', 'Dashboard building'], description: 'Matplotlib and Seaborn' },
        { week: 3, module: 'Statistical Analysis', tasks: ['Hypothesis testing', 'Regression'], description: 'Statistics fundamentals' },
        { week: 4, module: 'Machine Learning', tasks: ['Build ML models', 'Model evaluation'], description: 'Supervised learning' },
      ],
      tools: ['Python', 'Jupyter', 'Pandas', 'Scikit-learn', 'TensorFlow'],
      difficulty: 'Advanced',
      status: 'Filling Fast',
      enrolledCount: 0,
      batchIds: [],
      createdAt: admin.firestore.Timestamp.now(),
      updatedAt: admin.firestore.Timestamp.now(),
    },
    {
      id: 'mobile-app-dev',
      title: 'Mobile App Development',
      domain: 'Mobile Development',
      description: 'Create cross-platform mobile apps with React Native. Deploy to iOS and Android app stores.',
      duration: '6 weeks',
      instructor: {
        name: 'Emily Rodriguez',
        avatar: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&background=F59E0B&color=fff',
      },
      curriculum: [
        { week: 1, module: 'React Native Basics', tasks: ['Setup environment', 'First app'], description: 'Mobile development intro' },
        { week: 2, module: 'Navigation & Layout', tasks: ['Screen navigation', 'Responsive design'], description: 'Building UI flows' },
        { week: 3, module: 'State & APIs', tasks: ['Data fetching', 'State management'], description: 'App logic' },
        { week: 4, module: 'Deployment', tasks: ['Build for production', 'App store submission'], description: 'Going live' },
      ],
      tools: ['React Native', 'Expo', 'JavaScript', 'Firebase'],
      difficulty: 'Intermediate',
      status: 'Open',
      enrolledCount: 0,
      batchIds: [],
      createdAt: admin.firestore.Timestamp.now(),
      updatedAt: admin.firestore.Timestamp.now(),
    },
  ];

  for (const internship of internships) {
    await db.collection('internships').doc(internship.id).set(internship);
    console.log(`Created internship: ${internship.title}`);

    const batchRef = db.collection('batches').doc();
    const batch = {
      internshipId: internship.id,
      startDate: admin.firestore.Timestamp.fromDate(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)),
      userIds: [],
      status: 'Scheduled',
      maxCapacity: 30,
      createdAt: admin.firestore.Timestamp.now(),
    };
    await batchRef.set(batch);
    console.log(`Created batch for: ${internship.title}`);

    await db.collection('internships').doc(internship.id).update({
      batchIds: admin.firestore.FieldValue.arrayUnion(batchRef.id),
    });

    for (let week = 1; week <= 4; week++) {
      const taskRef = db.collection('tasks').doc();
      const task = {
        internshipId: internship.id,
        title: `Week ${week} Assignment`,
        description: `Complete the ${internship.curriculum[week - 1]?.module || 'module'} tasks and submit your work.`,
        dueDate: admin.firestore.Timestamp.fromDate(new Date(Date.now() + (week * 7 + 7) * 24 * 60 * 60 * 1000)),
        maxMarks: 100,
        week: week,
        createdAt: admin.firestore.Timestamp.now(),
      };
      await taskRef.set(task);
      console.log(`Created task for week ${week} of ${internship.title}`);
    }
  }

  console.log('Seed complete!');
  process.exit(0);
}

seedData().catch((error) => {
  console.error('Seed failed:', error);
  process.exit(1);
});
