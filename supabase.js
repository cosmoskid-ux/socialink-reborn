import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://cpsgwqwiwjcqimsipmxy.supabase.co';
const SUPABASE_KEY = 'sb_publishable_2g1qRPG_KouI9szLece8KQ_FX_gWdhn';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

window.supabaseClient = supabase;

console.log('Socialink Supabase connection initialized.');
