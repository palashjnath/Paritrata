import React from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyles } from "./ReusableStyles";
const data = [
  { data: 1},
  {
    data: 2,
  },
  {
    data: 3,
  },
  {
    data: 0,
  },
  {
    data: 8,
  },
  {
    data:30,
  },
  {
    data: 25,
  },
  {
    data: 60,
  },
  {
    data: 50,
  },
  {
    data: 40,
  },
  {
    data: 32,
  },
  {
    data: 29,
  },
  {
    data: 28,
  },
  {
    data: 30,
  },
  {
    data: 20,
  },
  {
    data: 15,
  },
  {
    data: 20,
  },
  {
    data: 22,
  },
  {
    data: 15,
  },
  {
    data: 30,
  },
  {
    data: 50,
  },
  {
    data: 60,
  },
  {
    data: 10,
  },
  {
    data: 12,
  },
  {
    data: 16,
  },
  {
    data: 20,
  },
];
export default function Donations() {
  return (
    <Section>
      <div className="top">
        <div className="info">
          <h5>People Effected This Month</h5>
          <h1>682</h1>
          <div className="growth">
            <span>+2.45%</span>
          </div>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <Tooltip cursor={false} />
            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="data"
              stroke="black"
              fill="grey"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  ${cardStyles}
  padding: 2rem 0 0 0;
  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      h1 {
        font-size: 2rem;
      }
      .growth {
        background-color: grey;
        padding: 0.5rem;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: white;
          span {
            color: black;
          }
        }
        span {
          color: black;
        }
      }
    }
  }
  .chart {
    height: 70%;
    .recharts-default-tooltip {
      background-color: black ;
      border-color: black ;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
  }
`;