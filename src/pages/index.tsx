import Head from "next/head";
import classNames from "classnames";
import Hero from "@organisms/Hero";
import BusinessPlan from "@organisms/Business Plan";
import Footer from "@organisms/Footer";
import Favicon from "@molecules/Favicon";

const text1 =
  "Sei un'agenzia di telecomunicazione? Conosci le ricerche degli utenti su internet? Aiutali a trovare ciò che vogliono, ora!";
const text2 =
  "Immagina di entrare in un negozio e di trovare subito quello che volevi, a metà prezzo. Solo per te";
const text3 =
  "Sfrutta la potenza dei servizi Amazon Web Services per ottenere analisi precise e veloci dei dati collezionati";
const activity =
  "Il modello di business che vuole essere proposto è un modello per cui le agenzie di telecomunicazioni analizzano, sfruttando i servizi di cloud computing offerti da AWS," +
  " i dati delle ricerche degli utenti per vendere a negozi fisici analisi di interesse dei singoli utenti. Il modello è tale per cui un qualsiasi cliente che entri in un negozio fisico " +
  "convenzionato riceva offerte personalizzate, generate in base ai dati di ricerca, mirate a soddisfare le sue esigenze uniche. Questo sistema innovativo di advertising permetterebbe una rivalutazione dei negozi fisici" +
  " oltre che la creazione di un vero e proprio business per le agenzie di telecomunicazioni";
const clients =
  "I clienti diretti di AWS diventerebbero quindi le grandi agenzie di telecomunicazione come AT&T e Verizon Communications, immaginando che queste abbiano stretto degli accordi di privacy con i vari clienti tali per cui siano autorizzate alla vendita e alla divulgazione dei dati di navigazione e di geolocalizzazione";
const partners =
  "In un contesto come quello proposto, i principali partners delle agenzie di telecomunicazioni diventerebbero le agenzie di marketing: ogni negozio fisico interessato acquisterebbe quindi un pacchetto in grado non solo di fornire dati riguardo i clienti e i loro interessi, ma anche di sviluppare una strategia applicativa in grado di promuovere le vendite e aumentare i profitti";
const costsRevenue =
  "L'agenzia di telecomunicazione che vuole implementare un business di questo tipo avrà bisogno di basare l'analisi dei dati raccolti (navigazione e geolocalizzazione) su un servizio di cloud computing di AWS. In modo particolare vengono utilizzati servizi quale Amazon Kinesis Data Analytics che permette di ricevere informazioni dettagliate e fruibili a partire da dati in streaming in tempo reale";

export default function Home() {
  return (
    <>
      <Head>
        <title>BusinessPlan</title>
        <meta
          name="keywords"
          content="Business Plan, an Innovative Cloud Challenge landing"
        />
        <Favicon />
      </Head>
      <div className="flex flex-col justify-center px-[20px]">
        <Hero text1={text1} text2={text2} text3={text3} />
        <BusinessPlan
          activitText={activity}
          clientText={clients}
          partnersText={partners}
          CostsRevenueText={costsRevenue}
        />
      </div>
    </>
  );
}
