import { supabase } from "./supabase";

export async function getSession() {
  const { data, error } = await supabase.auth.getSession();
  if (data.session) {
    return data;
  } else {
    throw new Error(String(error));
  }
}
