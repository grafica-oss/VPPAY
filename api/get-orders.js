export default async function handler(req, res) {
    const SHOP_NAME = "gadaletadigital.myshopify.com";
    const TOKEN = "";
    const TAG_FILTRO = "vppay";

    const url = `https://${SHOP_NAME}/admin/api/2024-01/orders.json?tag=${TAG_FILTRO}&status=any&limit=50`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Shopify-Access-Token': TOKEN,
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        
        // Aggiungiamo gli header per permettere al tuo sito di leggere i dati
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Errore nel recupero dati" });
    }

}
