import { FC } from 'react';
import { META_DATA } from 'src/lib/meta-data';
import { Twitter, GitHub, ExternalLink } from 'react-feather';
import Link from 'next/link';
import { ZennIcon } from '../ui/icons/zenn';

const Bottom: FC = () => (
  <div className='flex justify-between mt-20'>
    <div className='text-xs text-slate-400'>
      &copy; {new Date().getFullYear()} {META_DATA.COMPANY.NAME}
    </div>
    <div className='flex gap-6'>
      <a
        href={META_DATA.EXTERNAL.PRIVACY}
        target='_blank'
        rel='noreferrer'
        className='flex items-center gap-2'
      >
        プライバシーポリシー
      </a>
      <a
        href={META_DATA.EXTERNAL.TERMS}
        target='_blank'
        rel='noreferrer'
        className='flex items-center gap-2'
      >
        利用規約
      </a>
    </div>
  </div>
);

const Component: FC = () => (
  <footer className='border-t text-sm text-gray-500'>
    <div className='max-w-screen-xl mx-auto py-12 lg:pt-24 lg:pb-12 px-3'>
      <div className='flex flex-wrap justify-between gap-6'>
        <div className='basis-[300px]'>
          <Link href='/' className='flex items-center font-bold mb-12'>
            <span className='text-xl font-normal'>{META_DATA.SITE.TITLE}</span>
          </Link>
          <div>
            <div className='mb-4'>Follow Us</div>
            <div className='flex gap-4'>
              <a
                href={`https://twitter.com/${META_DATA.SOCIAL.TWITTER}`}
                target='_blank'
                rel='noreferrer'
                className='text-slate-400 hover:text-slate-500 active:text-slate-600 transition duration-100'
                title='運営者のツイッター'
              >
                <Twitter width={20} height={20} />
              </a>

              <a
                href={`https://github.com/${META_DATA.SOCIAL.GITHUB}`}
                className='text-slate-400 hover:text-slate-500 active:text-slate-600 transition duration-100'
                title='運営者のGithub'
                target='_blank'
                rel='noreferrer'
              >
                <GitHub width={20} height={20} />
              </a>
              <a
                href={`https://zenn.dev/${META_DATA.SOCIAL.ZENN}`}
                className='text-slate-400 hover:text-slate-500 active:text-slate-600 transition duration-100'
                title='運営者のZenn'
                target='_blank'
                rel='noreferrer'
              >
                <ZennIcon width={20} height={20} />
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap basis-[600px]'>
          <div className='basis-[300px]'>
            <ul className='flex flex-initial flex-col md:flex-1'>
              <li className='py-3 md:py-0 md:pb-4'>
                <p className='font-bold'>Related</p>
              </li>
              <li className='py-3 md:py-0 md:pb-4'>
                <a
                  href={META_DATA.EXTERNAL.BLOG}
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center gap-2'
                >
                  ブログ
                  <ExternalLink strokeWidth={1} className='w-5' />
                </a>
              </li>
            </ul>
          </div>
          <div className='basis-[300px]'>
            <ul className='flex flex-initial flex-col md:flex-1'>
              <li className='py-3 md:py-0 md:pb-4'>
                <p className='font-bold'>Services</p>
              </li>
              {Object.entries(META_DATA.EXTERNAL.SERVICES).map(([name, { url }]) => (
                <li key={name} className='py-3 md:py-0 md:pb-4'>
                  <a
                    href={url}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-2'
                  >
                    {name}
                    <ExternalLink strokeWidth={1} className='w-5' />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Bottom />
    </div>
  </footer>
);

export default Component;
