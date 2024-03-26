import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://mgzarvkajohiegiyowtb.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nemFydmtham9oaWVnaXlvd3RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyODk5ODYsImV4cCI6MjAyNjg2NTk4Nn0.dzwhcB3AG3Hd7PSYeN3X53BYdJTuVPVQQtaK5QJ9VMs"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});