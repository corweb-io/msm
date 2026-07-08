# MSM — Site web redesign

Nouveau site web pour [MSM](https://msm.ca) — Montreal Software Machine.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React** (icônes)

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Structure

| Route | Description |
|---|---|
| `/` | Accueil |
| `/solutions` | Vue d'ensemble des solutions |
| `/solutions/organic` | Gestion d'entreprise |
| `/solutions/iaa` | Agroalimentaire |
| `/solutions/confidentiel` | Sécurité des données |
| `/solutions/bactrack` | Solution environnementale |
| `/produits` | Suite de produits |
| `/tarifs` | Tarification |
| `/a-propos` | À propos |
| `/support` | Support technique |
| `/carriere` | Carrière |
| `/contact` | Formulaire de contact |
| `/legal/*` | Pages légales |

## Contenu

Le contenu est centralisé dans `src/lib/content.ts` pour faciliter les mises à jour.

## Variables d'environnement

Copier `.env.example` vers `.env.local` et configurer :

- `CONTACT_EMAIL` — adresse de réception (serveur uniquement, jamais exposée au navigateur)
- `CONTACT_FROM_EMAIL` — expéditeur (`hello@corweb.io`, domaine vérifié chez Resend)
- `RESEND_API_KEY` — clé API [Resend](https://resend.com) pour l'envoi du formulaire

## Prochaines étapes suggérées

- [ ] Ajouter version anglaise (i18n)
- [x] Formulaire de contact (server action + Resend)
- [ ] Intégrer le logo faucon d'or officiel
- [ ] Ajouter les PDFs (Nouveautés 2025, IAA) en téléchargement
- [ ] Déployer sur Vercel ou l'hébergement MSM
# msm
