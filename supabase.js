
const SUPABASE_URL = "https://cislldqffozquyngihno.supabase.co";
const SUPABASE_KEY = "sb_publishable_aQ1bYC-KSTEs4b3DVlOIQw_lq2TxTIB";

const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";

script.onload = () => {
  window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );
  console.log("JIRHU Fresh Supabase connected");
};

document.head.appendChild(script);

