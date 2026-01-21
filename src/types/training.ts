// Extended Training Types (beyond database schema)
// The base TrainingModule is exported from database.ts

export interface QuizQuestion {
    id: string
    question: string
    options: string[]
    correctIndex: number  // 0-based index of correct answer
}

export interface Quiz {
    id: string
    questions: QuizQuestion[]
    passingScore: number  // percentage, e.g. 80
}

// Extended training module with quiz and additional fields
export interface TrainingModuleWithQuiz {
    id: string
    title: string
    description: string
    type: 'video' | 'pdf' | 'document'
    contentUrl?: string
    duration: string
    isRequired: boolean
    isActive: boolean
    quiz?: Quiz
    createdAt: string
}

export interface CleanerProgress {
    moduleId: string
    completed: boolean
    quizScore?: number
    completedAt?: string
}
