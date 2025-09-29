import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "http://<YOUR-VM-PUBLIC-IP>:8000",  // Supabase URL (auth + db)
  "<YOUR-ANON-KEY>"                  // anon key from supabase/.env
);

export default supabase;
