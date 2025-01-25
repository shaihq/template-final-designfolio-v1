import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ztksesbncfpyzwwyllkv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0a3Nlc2JuY2ZweXp3d3lsbGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyMDc1ODAsImV4cCI6MjAyMTc4MzU4MH0.0oEHE2P30YmitZ_Qn0N5LH-RTGwVDxW_VRKPEyYXZQE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);