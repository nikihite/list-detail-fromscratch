const SUPABASE_URL = 'https://zcwghasajjcnjalirtgv.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpjd2doYXNhampjbmphbGlydGd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTg5MTEsImV4cCI6MTk2Nzg3NDkxMX0.PABjBwN_OcjQPMnybnEw2Gb1TCQAlLw_oz348jM0rSw';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getZodiac() {
    const resp = await client.from('zodiacs_table').select('*');
    return resp.data;
}

