export type UUID = string;
export type ISODate = `${number}-${number}-${number}`;
export type ObligationStatus = 'pending' | 'completed' | 'failed' | 'excused' | 'not_applicable';
export type AppContextType = 'home' | 'hotel' | 'external_work' | 'exceptional';

export interface UserProfile { id: UUID; displayName: string | null; timezone: string; }
export interface DailyObligation { id: UUID; userId: UUID; sourceModule: string; sourceId: UUID; titleSnapshot: string; scheduledDate: ISODate; status: ObligationStatus; contextId?: UUID | null; }
export interface ProgressEvent { id: UUID; userId: UUID; eventType: string; sourceModule: string; sourceId?: UUID | null; occurredAt: string; metadata: Record<string, unknown>; }
export interface ShowcaseRequest { template: 'monthly-recap' | 'evolution-report' | 'achievement'; format: 'story' | 'feed' | 'square'; periodStart: ISODate; periodEnd: ISODate; includePhotos: boolean; selectedMetrics: string[]; }
