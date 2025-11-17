import { createClient } from '@supabase/supabase-js';

// Supabase client for browser usage
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

// Database Types (Auto-generated from Trinity MOAT schemas)
export interface DACOOGoal {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  target_revenue?: number;
  deadline?: string;
  status: 'planning' | 'in_progress' | 'completed';
  created_at: string;
  updated_at: string;
}

export interface DACOOTask {
  id: string;
  goal_id: string;
  title: string;
  description?: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'in_progress' | 'completed';
  dependencies?: string[];
  estimated_time?: number;
  ai_generated: boolean;
  created_at: string;
  updated_at: string;
}

export interface DACOOAsset {
  id: string;
  user_id: string;
  type: 'course' | 'template' | 'ebook' | 'tool' | 'service';
  title: string;
  description?: string;
  content?: string;
  price: number;
  category?: string;
  tags?: string[];
  created_by: 'ai' | 'human' | 'hybrid';
  downloads: number;
  revenue: number;
  created_at: string;
  updated_at: string;
}

export interface AEGMAnalytics {
  id: string;
  user_id: string;
  metric_type: string;
  metric_value: number;
  period: 'daily' | 'weekly' | 'monthly';
  metadata?: Record<string, any>;
  created_at: string;
}

export interface AEGMABTest {
  id: string;
  user_id: string;
  name: string;
  hypothesis?: string;
  variants: Record<string, any>;
  status: 'draft' | 'running' | 'completed';
  winner?: string;
  confidence?: number;
  started_at?: string;
  completed_at?: string;
  created_at: string;
}

export interface OVSOutcome {
  id: string;
  user_id: string;
  outcome_type: 'revenue' | 'conversion' | 'engagement' | 'retention';
  channel: string;
  expected_value: number;
  actual_value?: number;
  variance?: number;
  verified: boolean;
  proof?: Record<string, any>;
  created_at: string;
  verified_at?: string;
}

export interface OVSChannel {
  id: string;
  user_id: string;
  channel: string;
  impressions: number;
  clicks: number;
  conversions: number;
  revenue: number;
  roi?: number;
  attribution?: Record<string, any>;
  period_start: string;
  period_end: string;
  created_at: string;
}

export interface OVSROIReport {
  id: string;
  user_id: string;
  period_start: string;
  period_end: string;
  total_investment: number;
  total_revenue: number;
  roi: number;
  breakdown?: Record<string, any>;
  recommendations?: string[];
  created_at: string;
}

// Helper functions for common queries
export const dacoo = {
  // Goals
  async getGoals(userId: string) {
    const { data, error } = await supabase
      .from('dacoo_goals')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as DACOOGoal[];
  },

  async createGoal(goal: Omit<DACOOGoal, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('dacoo_goals')
      .insert(goal)
      .select()
      .single();
    
    if (error) throw error;
    return data as DACOOGoal;
  },

  // Tasks
  async getTasks(goalId: string) {
    const { data, error } = await supabase
      .from('dacoo_tasks')
      .select('*')
      .eq('goal_id', goalId)
      .order('priority', { ascending: true });
    
    if (error) throw error;
    return data as DACOOTask[];
  },

  // Assets
  async getAssets(userId: string) {
    const { data, error } = await supabase
      .from('dacoo_assets')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as DACOOAsset[];
  },

  async createAsset(asset: Omit<DACOOAsset, 'id' | 'downloads' | 'revenue' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('dacoo_assets')
      .insert(asset)
      .select()
      .single();
    
    if (error) throw error;
    return data as DACOOAsset;
  },
};

export const aegm = {
  // Analytics
  async getAnalytics(userId: string, period: 'daily' | 'weekly' | 'monthly' = 'monthly') {
    const { data, error } = await supabase
      .from('aegm_analytics')
      .select('*')
      .eq('user_id', userId)
      .eq('period', period)
      .order('created_at', { ascending: false })
      .limit(30);
    
    if (error) throw error;
    return data as AEGMAnalytics[];
  },

  // A/B Tests
  async getABTests(userId: string) {
    const { data, error } = await supabase
      .from('aegm_ab_tests')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as AEGMABTest[];
  },
};

export const ovs = {
  // Outcomes
  async getOutcomes(userId: string) {
    const { data, error } = await supabase
      .from('ovs_outcomes')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as OVSOutcome[];
  },

  // Channels
  async getChannels(userId: string) {
    const { data, error } = await supabase
      .from('ovs_channels')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as OVSChannel[];
  },

  // ROI Reports
  async getROIReports(userId: string) {
    const { data, error } = await supabase
      .from('ovs_roi_reports')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as OVSROIReport[];
  },
};
