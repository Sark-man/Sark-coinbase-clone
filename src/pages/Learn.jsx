import LearnCard from "../components/common/LearnCard"
import learncardimg1 from "../assets/learncardimg1.png"
import LearnTopic from "../components/common/LearnTopic"
import LinkCard from "../components/common/LinkCard"
import cryptobasics from "../assets/cryptobasics.png"
import tips from "../assets/tips.png"
import advanced from "../assets/advanced.png"
import futures from "../assets/futures.png"
import Bitcoin from "../assets/learnpage/Bitcoin.png"
import Defi from "../assets/learnpage/Defi.png"
import DeFi2 from "../assets/learnpage/DeFi2.png"
import ethereum from "../assets/learnpage/ethereum.png"
import FUD from "../assets/learnpage/FUD.png"
import stablecoin from "../assets/learnpage/stablecoin.png"
import { FaGreaterThan } from "react-icons/fa6";
import LearnSection from "../components/layout/LearnSection"
import { TipsCards, TradingCards, FuturesCards, WalletCards } from "../data/LearnData"

function Learn(){
  return (
    <main>
      <section className="px-10 py-50 border-b border-gray-200">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-3 items-center">
            <h1 className="subheading font-bold">Crypto questions, answered</h1>
            <p className="text-main text-gray-600">Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="flex flex-col gap-6">
              <p className="text-main font-bold">Featured</p>
              <LearnCard
                image={learncardimg1}
                category="VIDEO TUTORIAL"
                title="When is the best time to invest in crypto"
                description="When prices are fluctuating, how do you know when to buy? Learn more about using dollar-cost averaging to weather price volatility"
              >
              </LearnCard>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-main font-bold">Popular</p>
              <LearnTopic 
                subtopic="BEGINNERS'S GUIDE"
                topic="What is cryptocurrency?"
                />
              <LearnTopic 
                subtopic="GETTING STARTED"
                topic="How to earn crypto rewards"
                />
              <LearnTopic 
                subtopic="GETTING STARTED"
                topic="How to add crypto to your Coinbase Wallet"
                />
              <LearnTopic 
                subtopic="YOUR CRYPTO"
                topic="Tax forms, explained: A guide to U.S. tax forms and crypto reports"
                />
              <LearnTopic 
                subtopic="GETTING STARTED"
                topic="Beginner's guide to dapps"
                />
              <LearnTopic 
                subtopic="MARKET UPDATE"
                topic="Everything you need to know about the first ever U.S. Bitcoin ETF"
                />
             
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <LinkCard
              image={cryptobasics}
              topic="Crypto basics"
            />
            <LinkCard
              image={tips}
              topic="Tips and Tutorials"
            />
            <LinkCard
              image={advanced}
              topic="Advanced trading"
            />
            <LinkCard
              image={futures}
              topic="Futures"
            />

          </div>
        </div>
      </section>

      <section className="px-10 py-20 border-b border-gray-200">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-3 items-center">
            <h2 className="subheading font-bold">Crypto basics</h2>
            <p className="text-main text-gray-600">New to crypto? Not for long - start with these guides and explainers.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-20">
            <LearnCard
              image={Bitcoin}
              category="BEGINNER'S GUIDE"
              title="What is Bitcoin?"
              description="Bitcoin is the world's first widely adopted cryptocurrency - it allows for secure and seamless peer-to-peer transactions on the internet."
            />
            <LearnCard
              image={Defi}
              category="BEGINNER'S GUIDE"
              title="Guide to DeFi tokens and altcoins"
              description="From Aave to Zcash, decide what to trade with our beginner's guide"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <LearnCard
              image={ethereum}
              category="BEGINNER'S GUIDE"
              title="What is Ethereum"
              imageHeight="h-100"
            />
            <LearnCard
              image={DeFi2}
              category="KEY TERM"
              title="What is DeFi?"
              imageHeight="h-100"
            />
            <LearnCard
              image={stablecoin}
              category="BEGINNER'S GUIDE"
              title="What is Stablecoin?"
              imageHeight="h-100"
            />
            <LearnCard
              image={FUD}
              category="GLOSSARY"
              title="Don't let FUD give you FOMO or you'll end up REKT - crypto slang, explained"
              imageHeight="h-100"
            />
          </div>

          <a className="flex justify-center">
            <button className="btn-primary flex">
              See more crypto basics <FaGreaterThan />
            </button>
          </a>
        </div>
      </section>

      <section className="bg-gray-200 px-10 py-20 border border-gray-300">
        <div className="flex flex-col gap-20 items-center">
          <h2 className="subheading font-bold">What is...</h2>
          <div className="flex gap-6 justify-center flex-wrap">
            <button className="btn-learn">Bitcoin</button>
            <button className="btn-learn">Blockchain</button>
            <button className="btn-learn">Cardano</button>
            <button className="btn-learn">Crypto wallet</button>
            <button className="btn-learn">DeFi</button>
            <button className="btn-learn">Ethereum</button>
            <button className="btn-learn">Fork</button>
            <button className="btn-learn">Inflation</button>
            <button className="btn-learn">Market cap</button>
            <button className="btn-learn">NFT</button>
            <button className="btn-learn">Private Key</button>
            <button className="btn-learn">Protocol</button>
            <button className="btn-learn">Smart contract</button>
            <button className="btn-learn">Token</button>
            <button className="btn-learn">Volatility memecoin</button>
          </div>
          <div>
            <button className="btn-primary">See more</button>
          </div>
        </div>
      </section>

      <LearnSection
        heading={"Tips and tutorials"}
        subheading={"Get practical, step by step answers to all things crypto"}
        cards={TipsCards}
        btntext={"See more tips and tutorials >"}
      />
      
      <LearnSection
        heading={"Advanced Trading"}
        subheading={"Ready to advance? Learn the tools and terminology you need to take control of your trades."}
        cards={TradingCards}
        btntext={"See more advanced trading >"}
      />

      <LearnSection
        heading={"Futures"}
        subheading={"New to futures trading? Get up to speed on the basics."}
        cards={FuturesCards}
        btntext={"See more about futures >"}
      />

      <LearnSection
        heading={"All Things Wallet"}
        subheading={"Earn yield, dive into crypto apps, control your holdings, and much more"}
        cards={WalletCards}
        btntext={"See more Wallet articles >"}
      />
    </main>
  )
}
export default Learn;