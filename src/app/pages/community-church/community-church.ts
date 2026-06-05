import { Component, OnInit } from '@angular/core';

interface ChurchEvent {
  title: string;
  time: string;
  description: string;
  room: string;
  type: 'sunday' | 'midweek';
}

interface BibleStudySession {
  status: 'Previous' | 'Current Focus' | 'Upcoming';
  statusClass: 'bg-secondary-subtle text-slate' | 'bg-gold-subtle text-champagne' | 'bg-primary-subtle text-info';
  dayText: string;
  dateLabel: string;
  timeLabel: string;
  bookTitle: string;
  chapterDetails: string;
}

@Component({
  selector: 'app-community-church',
  templateUrl: './community-church.html',
  styleUrls: ['./community-church.css'],
  standalone: false
})
export class CommunityChurch implements OnInit {
  activeTab: 'all' | 'sunday' | 'midweek' = 'all';

  // Real-time Zoom Metadata Coordinates
  zoomMeetingId = '933 0000 7664';
  zoomPasscode = '623185';
  zoomDirectLink = 'https://zoom.us/j/93300007664';

  allEvents: ChurchEvent[] = [
    {
      title: 'Sunday Worship Gathering (Tamil Language)',
      time: '3:00 PM',
      description: 'Our primary weekly celebration featuring sincere opening prayers, passionate worship, intentional congregational intercession, deep scriptural exposition, and altar ministry.',
      room: 'Main Sanctuary',
      type: 'sunday'
    }
  ];

  bibleStudySessions: BibleStudySession[] = [
    {
      status: 'Previous',
      statusClass: 'bg-secondary-subtle text-slate',
      dayText: 'PASSED',
      dateLabel: 'THU',
      timeLabel: '7:30 PM — 8:30 PM',
      bookTitle: 'The Gospel of John',
      chapterDetails: 'Reviewing the context, spiritual impacts, and foundations of Chapter 11.'
    },
    {
      status: 'Current Focus',
      statusClass: 'bg-gold-subtle text-champagne',
      dayText: 'THIS THU',
      dateLabel: 'THU',
      timeLabel: '7:30 PM — 8:30 PM',
      bookTitle: 'The Gospel of John',
      chapterDetails: 'In our upcoming session, we are sliding into the spiritual implications of Chapter 12.'
    },
    {
      status: 'Upcoming',
      statusClass: 'bg-primary-subtle text-info',
      dayText: 'NEXT THU',
      dateLabel: 'THU',
      timeLabel: '7:30 PM — 8:30 PM',
      bookTitle: 'The Gospel of John',
      chapterDetails: 'Preparing our hearts to deep-dive into the verse-by-verse mapping of Chapter 13.'
    }
  ];

  filteredEvents: ChurchEvent[] = [];

  ngOnInit() {
    this.switchTab('all');
  }

  switchTab(tabType: 'all' | 'sunday' | 'midweek') {
    this.activeTab = tabType;
    this.filteredEvents = tabType === 'all' ? this.allEvents : this.allEvents.filter(e => e.type === tabType);
  }

  // Safe Angular Dynamic Scrolling Method Matrix
  scrollToSection(element: HTMLElement) {
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}