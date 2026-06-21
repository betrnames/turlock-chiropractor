export interface Stretch {
  id: string
  name: string
  category: "neck" | "upper-back" | "lower-back"
  holdTime: string
  reps: string
  steps: string[]
  benefits: string[]
  safetyNote: string
}

export interface WellnessTip {
  id: string
  category: "desk" | "sleep" | "habits"
  title: string
  description: string
  tips: string[]
}

export const stretches: Stretch[] = [
  {
    id: "cat-cow",
    name: "Cat-Cow Stretch",
    category: "lower-back",
    holdTime: "5 seconds each position",
    reps: "8-10 cycles",
    steps: [
      "Start on your hands and knees in a tabletop position, wrists under shoulders, knees under hips.",
      "Inhale: drop your belly toward the floor, lift your chin and chest, let your shoulder blades draw together (Cow).",
      "Exhale: round your spine toward the ceiling, tuck your chin to your chest, draw your navel in (Cat).",
      "Flow smoothly between the two positions with your breath for 8-10 full cycles.",
    ],
    benefits: ["Improves spinal flexibility", "Relieves lower back tension", "Warms up the entire spine"],
    safetyNote: "Avoid if you have a recent spinal injury. Keep movements gentle and pain-free.",
  },
  {
    id: "childs-pose",
    name: "Child's Pose",
    category: "lower-back",
    holdTime: "30-60 seconds",
    reps: "2-3 holds",
    steps: [
      "Kneel on the floor with your toes together and knees hip-width apart.",
      "Sit back on your heels and walk your hands forward on the floor.",
      "Lower your forehead to the mat and let your arms extend fully.",
      "Relax your shoulders away from your ears and breathe deeply into your lower back.",
    ],
    benefits: ["Stretches lower back and hips", "Reduces stress and fatigue", "Gently lengthens the spine"],
    safetyNote: "Place a pillow under your knees if you have knee discomfort. Skip if you have ankle injuries.",
  },
  {
    id: "chin-tuck",
    name: "Chin Tucks",
    category: "neck",
    holdTime: "5 seconds each",
    reps: "10-15 repetitions",
    steps: [
      "Sit or stand tall with your shoulders relaxed and eyes looking straight ahead.",
      "Gently draw your chin straight back, as if making a double chin.",
      "Hold for 5 seconds — you should feel a stretch at the base of your skull.",
      "Release and return to the starting position. Repeat 10-15 times.",
    ],
    benefits: ["Corrects forward head posture", "Strengthens deep neck flexors", "Reduces neck pain and stiffness"],
    safetyNote: "Do not tilt your head up or down — the movement should be straight back. Stop if you feel dizziness.",
  },
  {
    id: "shoulder-rolls",
    name: "Shoulder Rolls",
    category: "neck",
    holdTime: "Continuous movement",
    reps: "10 forward, 10 backward",
    steps: [
      "Sit or stand with your arms relaxed at your sides.",
      "Slowly roll your shoulders up toward your ears, then back and down in a circular motion.",
      "Complete 10 rolls in the forward direction.",
      "Reverse and roll 10 times backward. Keep movements slow and controlled.",
    ],
    benefits: ["Relieves shoulder and neck tension", "Improves range of motion", "Reduces desk-related stiffness"],
    safetyNote: "If you feel sharp pain, reduce the size of the circles. Do not force range of motion.",
  },
  {
    id: "standing-hamstring",
    name: "Standing Hamstring Stretch",
    category: "lower-back",
    holdTime: "20-30 seconds each side",
    reps: "2-3 per side",
    steps: [
      "Stand tall and place one heel on a low step, bench, or sturdy surface in front of you.",
      "Keep your leg straight (soft knee, not locked) and flex your foot.",
      "Hinge forward at the hips with a flat back until you feel a stretch behind your thigh.",
      "Hold for 20-30 seconds, then switch sides.",
    ],
    benefits: ["Loosens tight hamstrings", "Reduces lower back strain", "Improves overall flexibility"],
    safetyNote: "Never bounce. Keep your back straight as you lean forward. Use a low surface to start.",
  },
  {
    id: "seated-twist",
    name: "Seated Spinal Twist",
    category: "upper-back",
    holdTime: "20-30 seconds each side",
    reps: "2-3 per side",
    steps: [
      "Sit on the floor with legs extended in front of you.",
      "Bend your right knee and place your right foot on the floor outside your left thigh.",
      "Place your left elbow on the outside of your right knee for leverage.",
      "Gently twist your torso to the right, looking over your right shoulder. Repeat on the other side.",
    ],
    benefits: ["Increases spinal mobility", "Stretches back and hip muscles", "Can aid digestion"],
    safetyNote: "Twist gently — never force the rotation. Avoid this stretch if you have a herniated disc.",
  },
  {
    id: "doorway-chest",
    name: "Doorway Chest Stretch",
    category: "upper-back",
    holdTime: "20-30 seconds",
    reps: "3 holds",
    steps: [
      "Stand in a doorway with your arms bent at 90 degrees, forearms resting on the door frame.",
      "Place one foot slightly forward for balance.",
      "Gently lean your body through the doorway until you feel a stretch across your chest and front shoulders.",
      "Keep your back straight and core engaged. Hold, then release.",
    ],
    benefits: ["Opens tight chest muscles", "Counteracts rounded shoulders from desk work", "Improves posture"],
    safetyNote: "Do not overextend. Stop immediately if you feel pain in your shoulders or rotator cuff area.",
  },
  {
    id: "knee-to-chest",
    name: "Knee-to-Chest Stretch",
    category: "lower-back",
    holdTime: "20-30 seconds each side",
    reps: "2-3 per side",
    steps: [
      "Lie on your back with both knees bent, feet flat on the floor.",
      "Bring one knee toward your chest, clasping your hands around your shin or behind your thigh.",
      "Gently pull the knee closer until you feel a comfortable stretch in your lower back and glute.",
      "Hold, then switch legs. You can also bring both knees to your chest at the same time.",
    ],
    benefits: ["Releases lower back tension", "Stretches glutes and hips", "Relieves morning stiffness"],
    safetyNote: "Keep your head and shoulders relaxed on the floor. Do not strain your neck to look up.",
  },
]

export const wellnessTips: WellnessTip[] = [
  {
    id: "desk-setup",
    category: "desk",
    title: "Ergonomic Desk Setup",
    description: "Proper desk ergonomics can prevent up to 60% of work-related neck and back pain.",
    tips: [
      "Position your monitor at arm's length, with the top of the screen at or slightly below eye level.",
      "Keep your feet flat on the floor with knees bent at approximately 90 degrees.",
      "Position your keyboard so your elbows rest at 90-100 degrees — wrists neutral, not bent.",
      "Use a chair with lumbar support, or place a rolled towel behind your lower back curve.",
      "Take a 30-second micro-break every 30 minutes to stand, stretch, and reset your posture.",
    ],
  },
  {
    id: "sleeping",
    category: "sleep",
    title: "Spine-Friendly Sleeping",
    description: "You spend roughly a third of your life sleeping — your position directly affects spinal health.",
    tips: [
      "Back sleepers: place a pillow under your knees to maintain your spine's natural curve.",
      "Side sleepers: keep a pillow between your knees to align your hips and reduce lower back strain.",
      "Avoid sleeping on your stomach — it forces your neck into rotation and flattens your lumbar curve.",
      "Choose a pillow height that keeps your neck aligned with your spine, not propped too high or too low.",
      "Replace your mattress every 7-10 years, or sooner if you notice sagging or wake with new stiffness.",
    ],
  },
  {
    id: "daily-habits",
    category: "habits",
    title: "Daily Habits for a Healthy Spine",
    description: "Small, consistent changes throughout your day add up to meaningful pain prevention.",
    tips: [
      "Stand up and walk for at least 2 minutes every hour — even a short loop around the room helps.",
      "Carry bags evenly: alternate shoulders, or use a backpack with both straps across your back.",
      "When lifting anything, bend at the knees and keep the load close to your body — never twist under load.",
      "Stay hydrated — your spinal discs are approximately 80% water and need fluid to absorb shock.",
      "Incorporate 10 minutes of gentle stretching into your morning or evening routine.",
    ],
  },
]
