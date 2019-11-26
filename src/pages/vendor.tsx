import React from 'react'

import IndexLayout from '../layouts'
import Banner from '../components/Banner'
import Vendor from '../resources/vendor.png'
import Features from '../components/Features'
import Feature from '../components/Feature'
import Quote from '../components/Quote'
import VendorBG from '../resources/vendor-bg.png'
import Bg from '../components/Bg'
import ActionCard from '../components/ActionCard'
import Details from '../components/Details'
import PricingTable from '../components/PricingTable'
import Circle from '../components/Circle'
import Layer from '../resources/layer.svg'
import Github from '../resources/octicons-mark-github.svg'
import Gitlab from '../resources/gitlab.svg'
import { Link } from 'gatsby'

const VendorPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/vendor/'>
        <div className="grey-container">

            {/* ----- Banner ----- */}

            <Banner
                subtitle="Gitpod Vendor"
                title={<h1>Use <strong>Gitpod as a Showroom</strong> for<br /> Your Developer Products</h1>}
                linkPath="#"
                linkText="Choose your Solution"
                img={<img alt="Network" src={Vendor}/>}
            />

            {/* ----- Section Features ----- */}

            <Features title="Highlight Your Developer Products">
                <Feature
                    title="Create a Showroom"
                    paragraphs={['With Gitpod you can offer hands-on experience with your developer products within seconds. It allows to run, modify and test your code and is highly customisable as you can adjust it to your API, library, framework, demos and examples.', 'Gitpod guarantees an excellent user experience by eliminating the risk of a wrong setup.']}
                />
                <Feature
                    title="Show Your Products to Everyone"
                    paragraphs={['All workspaces are well sandboxed so that …….. Gitpod prevents abuse like spammers, miners, etc..', 'A GitHub account is not required as your backend can be integrated via OAuth.']}
                />
                <Feature
                    title="Familiar Environment"
                    paragraphs={['Original VS Code extensions and Theia, the VS Code alike online IDE, make users feel at home immediately. Also, no modifications are required for your developer product, neither are runtimes required.']}
                />
                <Feature
                    title="Guide Your Users"
                    paragraphs={['Let Gitpod show your users what to try next. You can also integrate your own help system.']}
                />
                <Feature
                    title="Your Developer-Oriented Marketing Tool"
                    paragraphs={['With Gitpod you can obtain analytics on how your products are experienced. Finally you can fill in the missing block in your marketing funnel.']}
                />
            </Features>
        </div>

        {/* ----- Quote ----- */}

        <Quote
            title="We’ll make your developer products shine."
        />

        {/* ----- BG ----- */}

        <Bg url={VendorBG} />

        {/* ----- Pricing Table ----- */}

        <PricingTable
            title="Pricing Gitpod Vendor"
            paragraph="You have the choice to either host Gitpod yourself or to use our cloud infrastructure."
        >
            <tr className="header">
                <th style={{border: 'none', background: 'none'}}>&nbsp;</th>
                <th>Gitpod.io
                    <span><span>FREE</span> Trail</span>
                </th>
                <th>Gitpod Cloud
                    <span><span>FREE</span> Trail</span>
                </th>
                <th>Gitpod Self Hosted
                    <span><span>FREE</span> Trail</span>
                </th>
            </tr>
            <tr>
                <th>Pricing</th>
                <td>x</td>
                <td>x</td>
                <td>x</td>
            </tr>
            <tr>
                <th>Domain</th>
                <td>Gitpod.io</td>
                <td>Custom</td>
                <td>Custom</td>
            </tr>
            <tr>
                <th>Managed By</th>
                <td>Typefox</td>
                <td>Typefox</td>
                <td>You</td>
            </tr>
            <tr>
                <th>Infrastructure</th>
                <td>Globally distributed</td>
                <td>> 1 geographical regions</td>
                <td>On-prem or private cloud</td>
            </tr>
            <tr>
                <th>SLA</th>
                <td>optional</td>
                <td>optional</td>
                <td></td>
            </tr>
            <tr>
                <th><strong>Support</strong></th>
                <td><Circle /></td>
                <td><Circle /></td>
                <td><Circle /></td>
            </tr>
            <tr>
                <th><strong>White Labeling</strong></th>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <th>&emsp;&emsp;Theia</th>
                <td></td>
                <td><Circle /></td>
                <td><Circle /></td>
            </tr>
            <tr>
                <th>&emsp;&emsp;Gitpod</th>
                <td></td>
                <td><Circle /></td>
                <td><Circle /></td>
            </tr>
            <tr>
                <th>Features</th>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <th>Git Integeration</th>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <th><img src={Github} alt="Github Logo"/> github.com</th>
                <td><Circle /></td>
                <td><Circle /></td>
                <td><Circle /></td>
            </tr>
            <tr>
                <th><img src={Github} alt="Github Logo"/> Github Enterprise</th>
                <td>public only</td>
                <td><Circle /></td>
                <td><Circle /></td>
            </tr>
            <tr>
                <th><img src={Gitlab} alt="Gitlab Logo"/> gitlab.com</th>
                <td><Circle /></td>
                <td><Circle /></td>
                <td><Circle /></td>
            </tr>
            <tr>
                <th><img src={Gitlab} alt="Gitlab Logo"/> Gitlab self-hosted</th>
                <td>public only</td>
                <td><Circle /></td>
                <td><Circle /></td>
            </tr>
            <tr>
                <th><img src={Layer} alt="Layer Logo"/> Bitbucket</th>
                <td>Soon</td>
                <td>Soon</td>
                <td>Soon</td>
            </tr>
            <tr>
                <th>Custom Authorization</th>
                <td>OAuth2</td>
                <td>OAuth2</td>
                <td>OAuth2</td>
            </tr>
            <tr>
                <th></th>
                <td><Link to="#" className="btn btn--cta">Start for Free</Link></td>
                <td><Link to="#" className="btn btn--cta">Contact Sales</Link></td>
                <td><Link to="#" className="btn">Host Yourself</Link></td>
            </tr>
        </PricingTable>

        {/* ----- Didn't find ----- */}

        <ActionCard
            title='Didn’t find what you’re looking for?'
            text='Please, get in touch. We’re happy to answer your questions.'
            anchors={[{href: '/schedule-call',text: 'Schedule a Call'}, {href: '/contact', text: 'Contact'}]}
        />

        <Details
            title="Explore Gitpod"
            text="Learn about collaboration, workspace snapshots, supported programming languages, and much more."
            anchors={[{href: '/blog', text: 'See Blog'}, {href: '/features', text: 'See Features'}]}
        />
    </IndexLayout>
)

export default VendorPage
