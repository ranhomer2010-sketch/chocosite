"use client";

import { useState } from "react";
import { SiteAnchor } from "@/components/site-elements";
import { PriceGroupBlock } from "@/components/shared";
import { BOOKING_URL, type PriceGroup } from "@/lib/content";

export function PriceSwitcher({ groups, label }: { groups: PriceGroup[]; label: string }) {
  const [activeId, setActiveId] = useState(groups[0].id);
  const activeGroup = groups.find((group) => group.id === activeId) ?? groups[0];

  return (
    <section className="site-container price-switcher" id="prices-list" aria-label={label}>
      <nav className="price-nav" aria-label={label}>
        {groups.map((group) => (
          <button
            type="button"
            key={group.id}
            className={activeGroup.id === group.id ? "is-active" : ""}
            aria-pressed={activeGroup.id === group.id}
            aria-controls="active-price-group"
            onClick={() => setActiveId(group.id)}
          >
            {group.title}
          </button>
        ))}
      </nav>
      <div className="price-sections" id="active-price-group" aria-live="polite">
        <div className="price-panel" key={activeGroup.id}>
          <PriceGroupBlock group={activeGroup} />
          <div className="price-booking">
            <p>Вы выбрали «{activeGroup.title}». В онлайн-записи уточните процедуру, специалиста и время.</p>
            <SiteAnchor className="button" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Открыть онлайн-запись <span aria-hidden="true">↗</span>
            </SiteAnchor>
          </div>
        </div>
      </div>
    </section>
  );
}
