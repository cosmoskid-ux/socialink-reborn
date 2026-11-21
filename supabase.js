import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://cpsgwqwiwjcqimsipmxy.supabase.co';
const SUPABASE_KEY = 'sb_publishable_2g1qRPG_KouI9szLece8KQ_FX_gWdhn';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

window.supabaseClient = supabase;

console.log('Socialink Supabase connection initialized.');
async function startSocialinkSession() {
  const { data: { session }, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    console.error('Session error:', sessionError.message);
    return;
  }

  if (!session) {
    const { data, error } = await supabase.auth.signInAnonymously();

    if (error) {
      console.error('Sign-in error:', error.message);
      return;
    }

    console.log('Socialink anonymous session ready.');
  } else {
    console.log('Socialink session restored.');
  }
}

startSocialinkSession();
