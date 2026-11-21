import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://cpsgwqwiwjcqimsipmxy.supabase.co';
const SUPABASE_KEY = 'sb_publishable_2g1qRPG_KouI9szLece8KQ_FX_gWdhn';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

window.supabaseClient = supabase;

console.log('Socialink Supabase connection initialized.');

async function startSocialinkSession() {
  const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

  if (sessionError) {
    console.error('Session error:', sessionError.message);
    return null;
  }

  if (sessionData.session) {
    console.log('Socialink session restored.');
    return sessionData.session;
  }

  const { data, error } = await supabase.auth.signInAnonymously();

  if (error) {
    console.error('Sign-in error:', error.message);
    return null;
  }

  console.log('Socialink anonymous session ready.');
  return data.session;
}

window.socialinkSessionReady = startSocialinkSession();
