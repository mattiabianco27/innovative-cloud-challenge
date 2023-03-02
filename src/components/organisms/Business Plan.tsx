import Image from "next/image";
import heroImage from "../../../public/hero.svg";
import { Accordion, createStyles, rem, Text, List } from "@mantine/core";
import { AccordionItem } from "@mantine/core/lib/Accordion/AccordionItem/AccordionItem";

interface BPProps {
  activitText: string;
  clientText: string;
  partnersText: string;
  CostsRevenueText: string;
}

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
    borderRadius: theme.radius.sm,
    color: "white",
  },

  item: {
    backgroundColor: "transparent",
    border: `${rem(1)} solid white`,
    position: "relative",
    zIndex: 0,
    transition: "transform 150ms ease",
    color: "white",

    "&[data-active]": {
      transform: "scale(1.03)",
      backgroundColor: "black",
      boxShadow: theme.shadows.md,
      borderColor: "white",
      borderRadius: theme.radius.md,
      zIndex: 1,
      color: "white",
    },
  },

  control: {
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
  chevron: {
    "&[data-rotate]": {
      transform: "rotate(-90deg)",
    },
    color: "white",
  },
}));

export default function BusinessPlan(props: BPProps) {
  const { classes } = useStyles();
  return (
    <div className="flex flex-col items-center mb-[100px]">
      <div className="flex text-[40px] font-bold bg-gradient-to-r from-lightblue to-red text-transparent bg-clip-text">
        Business Plan
      </div>
      <div className="w-full px-[20px] mt-[20px] laptop:px-[200px]">
        <Accordion
          variant="filled"
          radius={"md"}
          className={classes.root}
          classNames={classes}
        >
          <Accordion.Item value="Attività">
            <Accordion.Control>Attività</Accordion.Control>
            <Accordion.Panel>{props.activitText}</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="Clienti">
            <Accordion.Control>Clienti</Accordion.Control>
            <Accordion.Panel>{props.clientText}</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="Partners">
            <Accordion.Control>Partners</Accordion.Control>
            <Accordion.Panel>{props.partnersText}</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="Costi e Benefici">
            <Accordion.Control>Costi e Benefici</Accordion.Control>
            <Accordion.Panel>{props.CostsRevenueText}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
