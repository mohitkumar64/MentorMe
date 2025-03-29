export interface User {
  id: string;
  name: string;
  email: string;
  role: 'mentor' | 'mentee';
  profileImage?: string;
}

export interface Mentor extends User {
  experience: string;
  skills: string[];
  linkedinUrl: string;
  githubUrl?: string;
  resumeUrl: string;
  collegeName: string;
  semester: string;
  program: string;
}

export interface Mentee extends User {
  schoolName: string;
  subject: string;
  class: string;
  idCardUrl: string;
  address: string;
}

export interface Session {
  id: string;
  mentorId: string;
  menteeId: string;
  date: Date;
  duration: number;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

export interface Review {
  id: string;
  mentorId: string;
  menteeId: string;
  rating: number;
  comment: string;
  date: Date;
} 