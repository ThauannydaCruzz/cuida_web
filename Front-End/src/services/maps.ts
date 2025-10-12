import api from "./api";

export async function get_unidades() {
  const res = await api.get("/usuarios/get-unidades");
  return res.data;
}