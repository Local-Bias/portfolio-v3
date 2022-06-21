import Head from 'next/head';
import React, { FC, useState } from 'react';
import { ArrowIcon } from 'src/components/ui/icons/arrow';
import { Skill, skills } from 'src/static/contents';
import { meta } from 'src/static/site-config';

const SkillItem: FC<{ skill: Skill }> = ({ skill }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggle = () => {
    setExpanded((_current) => !_current);
  };

  let daysOfExperience = 0;
  let experience = '';

  if (skill.type === 'inProgress') {
    const now = new Date();
    const difference = now.getTime() - skill.since.getTime();
    daysOfExperience = difference / (1000 * 60 * 60 * 24);
  } else if (skill.type === 'pending') {
    daysOfExperience = skill.daysOfExperience;
  }

  const years = Math.floor(daysOfExperience / 365);
  const months = Math.floor((daysOfExperience % 365) / 30);

  if (years) {
    experience += `${String(years)}年`;
  }

  if (months) {
    experience += `${String(months)}ヵ月`;
  }

  return (
    <li className='ml-4'>
      <div
        className={`flex items-center justify-between p-2 transition rounded-md hover:bg-gray-100 ${
          !!skill.children && 'cursor-pointer'
        }`}
        onClick={toggle}
      >
        <div className='flex gap-2'>
          {!!skill.children && (
            <ArrowIcon className={`w-3 transition duration-300  ${expanded && 'rotate-90'}`} />
          )}
          <div className={`${!skill.children && 'ml-5'} mr-8`}>{skill.name}</div>
        </div>
        <div>{experience}</div>
      </div>
      {!!skill.children && expanded && <SkillTree skills={skill.children} />}
    </li>
  );
};

const SkillTree: FC<{ skills: Skill[] }> = ({ skills }) => {
  return (
    <ul className='flex flex-col gap-2 opacity-90 mt-2'>
      {skills.map((skill, i) => (
        <SkillItem key={i} skill={skill} />
      ))}
    </ul>
  );
};

const Component: FC = () => (
  <>
    <Head>
      <title>身につけたもの | {meta.title}</title>
    </Head>
    <article className='px-4 py-8 md:py-16'>
      <div className='flex justify-center'>
        <img src='/img/repair-shop.webp' alt='修理業者' loading='eager' width={200} height={200} />
      </div>
      <h1 className='mt-8'>身につけたもの</h1>
      <SkillTree skills={skills} />
    </article>
  </>
);

export default Component;
