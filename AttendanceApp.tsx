import React, { useState, useEffect } from 'react';
import { Check, X, Clock, Search, Users, Calendar, Save, ChevronDown, ArrowRightLeft, LogOut, User, Phone, Mail, MapPin, Award, TrendingUp, TrendingDown, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  studentNumber: string;
  status: 'present' | 'absent' | 'late' | null;
  studentStatus?: 'transferred' | 'relocated' | null;
  birthDate?: string;
  parentName?: string;
  parentPhone?: string;
  parentEmail?: string;
  address?: string;
  grades?: {
    subject: string;
    grade1: number;
    grade2: number;
    grade3: number;
    grade4: number;
    average: number;
  }[];
  attendanceHistory?: {
    date: string;
    status: 'present' | 'absent' | 'late';
  }[];
}

interface Classroom {
  id: string;
  name: string;
  grade: string;
  students: Student[];
}

const AttendanceApp: React.FC = () => {
  const [classrooms] = useState<Classroom[]>([
    {
      id: '1',
      name: 'Turma A',
      grade: '5
