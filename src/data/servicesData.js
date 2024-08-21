const servicesData = [
    {
        title: 'Custom Software Development',
        colapse: [
            {
                type: `text`,
                value: `<b>We support startups in Fintech, E-commerce, Health and another niches:</b>`
            },
            {
                type: 'list',
                list: [
                    `<b>Rapid MVP Development:</b> Transform your <span>Startup</span> idea into a functional MVP quickly with our streamlined development process, ensuring you hit the market faster.`,
                    `<b>Expertise:</b> You will get a Team with a Middle to Senior knowladge of <span>Python</span> and <span>Framework</span>, <span>Java</span> and <span>Node.js</span>.`,
                    `<b>Cutting-Edge Solutions:</b> Leverage the latest in fintech technologies, including blockchain, AI, and advanced analytics, to create innovative and secure MVPs.`,
                    `<b>Expert Team:</b> Our skilled developers and industry experts work closely with you to bring your fintech vision to life, providing guidance and expertise at every stage.`,
                    `<b>Scalable Architecture:</b> Build a robust MVP that can easily scale as your user base grows, ensuring long-term success and flexibility.`,
                    `<b>Compliance and Security:</b> Ensure your MVP adheres to all regulatory standards and employs top-notch security measures to protect sensitive financial data.`
                ]
            },
            {
                type: `text`,
                value: `<b>Contact Us</b> to schedule a consultation and unlock the full potential of custom software for your business!`
            },
        ],
        idx: 0
    },
    {
        title: 'High-Converting Website Dev',
        colapse: [
            {
                type: `text`,
                value: `<b>Is your website failing to engage visitors?</b>`
            },
            {
                type: 'list',
                list: [
                    `<b>Complete Development:</b> From initial design concepts to full deployment, we offer a seamless, end-to-end process tailored to your needs.`,
                    `<b>Boost Engagement:</b> Increase user interaction by 60% with immersive, interactive elements that keep visitors on your site longer.`,
                    `<b>Advanced Technologies:</b> Utilizing the latest in web development tools, including React, Node.JS and JavaScript frameworks, we create dynamic and responsive websites.`,
                    `<b>Creative Experts:</b> Our team of experienced designers and developers bring innovative ideas to life, ensuring your site stands out from the competition.`,
                ]
            },
            {
                type: `text`,
                value: `<b>Contact Us</b> and transform your online presence!`
            },
        ],
        idx: 1
    },
    {
        title: 'Custom AI and ML Development',
        colapse: [
            {
                type: `text`,
                value: `<b>Let’s automate tasks and save your money!</b>`
            },
            {
                type: 'list',
                list: [
                    `<b>Personalized Solutions:</b> From chatbots and virtual assistants to automation tools, we design and develop custom AI solutions tailored to your specific needs and objectives.`,
                    `<b>Boost Efficiency:</b> Say goodbye to time-consuming tasks and human errors. AI and ML Development will automate processes, saving you up to 60% in operational costs while ensuring accuracy and consistency.`,
                    `<b>Stay Ahead of the Curve:</b> With access to cutting-edge technologies like natural language processing (NLP) and machine learning algorithms, provides continuously learn and evolve to deliver smarter, more intuitive interactions.`,
                    `<b>Expert Guidance:</b> Our team of AI and ML specialists and developers work closely with you to understand your business goals and challenges, providing strategic insights and ongoing support to maximize the impact of your AI initiatives.`
                ]
            },
            {
                type: `text`,
                value: `<b>Contact Us</b> to schedule a consultation and discover the power of custom AI for your business!`
            },
        ],
        idx: 2
    },
    {
        title: 'Cybersecurity',
        colapse: [
            {
                type: `text`,
                value: `<b>Not If but When and How! Let Us Protect Your Business!</b>`
            },
            {
                type: 'list',
                list: [
                    `<b>Comprehensive Security Solutions:</b> From initial risk assessment to full implementation, we provide a seamless, end-to-end cybersecurity strategy tailored to the unique needs of fintech startups.`,
                    `<b>Enhance Protection:</b> Strengthen your security posture by 70% with advanced threat detection and prevention measures, safeguarding your MVP from cyber threats.`,
                    `<b>Cutting-Edge Technologies:</b> Leveraging the latest in cybersecurity tools, including AI-driven threat intelligence, encryption, and multi-factor authentication, we ensure robust protection for your fintech MVP.`,
                    `<b>Expert Team:</b> Our seasoned cybersecurity professionals bring extensive industry knowledge, ensuring your MVP is secure and compliant with the highest standards, giving you a competitive edge.`
                ]
            },
            {
                type: `text`,
                value: `<b>Contact Us Today</b> to schedule a consultation and secure your digital future!`
            },
        ],
        idx: 3
    },
    {
        title: 'Digital Marketing',
        colapse: [
            {
                type: `text`,
                value: `<b>Amplify Your Brand with Digital Marketing Excellence</b>`
            },
            {
                type: 'list',
                list: [
                    `<b>Comprehensive Approach:</b> From SEO to social media, we handle everything, providing a seamless experience.`,
                    `<b>Increase Visibility by 70%:</b> Our targeted campaigns ensure your brand reaches the right audience, increasing your online presence significantly.`,
                    `<b>Cutting-Edge Strategies:</b> Utilizing the latest in analytics, AI, and automation, we optimize every campaign for maximum ROI.`,
                    `<b>Expert Team:</b> With over 10 years of industry experience, our skilled professionals are dedicated to driving your success.`,
                    `<b>Don't Get Left Behind:</b> The digital landscape is evolving fast. Stay ahead of your competitors with our innovative solutions.`
                ]
            },
            {
                type: `text`,
                value: `<b>Contact Us Today</b> and watch your growth soar!`
            },
        ],
        idx: 4
    },
    // {
    //     title: 'Custom AI Bots',
    //     colapse: [
    //         {
    //             type: 'text',
    //             value: 'Overwhelmed by repetitive tasks?'
    //         },
    //         {
    //             type: 'list',
    //             value: [
    //                 [
    //                     {
    //                         type: 'bold',
    //                         value: 'Personalized Solutions:'
    //                     },
    //                     {
    //                         type: 'text',
    //                         value: 'From chatbots and virtual assistants to automation tools, we design and develop custom AI solutions tailored to your specific needs and objectives.'
    //                     }
    //                 ],
    //                 [
    //                     {
    //                         type: 'bold',
    //                         value: 'Boost Efficiency:'
    //                     },
    //                     {
    //                         type: 'text',
    //                         value: 'Say goodbye to time-consuming tasks and human errors. Our AI bots can automate processes, saving you up to 60% in operational costs while ensuring accuracy and consistency.'
    //                     }
    //                 ],
    //                 [
    //                     {
    //                         type: 'bold',
    //                         value: 'Stay Ahead of the Curve:'
    //                     },
    //                     {
    //                         type: 'text',
    //                         value: 'With access to cutting-edge technologies like natural language processing (NLP) and machine learning algorithms, our bots continuously learn and evolve to deliver smarter, more intuitive interactions.'
    //                     }
    //                 ],
    //                 [
    //                     {
    //                         type: 'bold',
    //                         value: 'Expert Guidance:'
    //                     },
    //                     {
    //                         type: 'text',
    //                         value: 'Our team of AI specialists and developers work closely with you to understand your business goals and challenges, providing strategic insights and ongoing support to maximize the impact of your AI initiatives.'
    //                     }
    //                 ]
    //             ]
    //         },
    //         {
    //             type: 'text',
    //             value: `Don't let manual tasks hold you back. Contact us today to schedule a consultation and discover the power of custom AI bots!`
    //         },
    //     ],
    //     idx: 1
    // },
    // {
    //     title: 'AR VR XR Development',
    //     colapse: [
    //         {
    //             type: 'text',
    //             value: 'Tired of traditional marketing methods falling flat?'
    //         },
    //         {
    //             type: 'list',
    //             value: [
    //                 [
    //                     {
    //                         type: 'bold',
    //                         value: 'Tailored Experiences:'
    //                     },
    //                     {
    //                         type: 'text',
    //                         value: `Whether it's augmented reality (AR) filters, virtual reality (VR) simulations, or mixed reality (XR) applications, we create immersive experiences that captivate and inspire.`
    //                     }
    //                 ],
    //                 [
    //                     {
    //                         type: 'bold',
    //                         value: 'Boost Engagement:'
    //                     },
    //                     {
    //                         type: 'text',
    //                         value: 'Elevate audience interaction by 80% with dynamic AR experiences that bring your products to life or VR simulations that transport users to new worlds.'
    //                     }
    //                 ],
    //                 [
    //                     {
    //                         type: 'bold',
    //                         value: 'Stay Ahead of the Curve:'
    //                     },
    //                     {
    //                         type: 'text',
    //                         value: `Harnessing the latest advancements in ARCore, ARKit, Unity, and Unreal Engine, we deliver cutting-edge solutions that push the boundaries of what's possible in immersive technology.`
    //                     }
    //                 ],
    //                 [
    //                     {
    //                         type: 'bold',
    //                         value: 'Expert Guidance:'
    //                     },
    //                     {
    //                         type: 'text',
    //                         value: `Our team of AR VR XR specialists works closely with you to understand your goals and objectives, providing strategic insights and innovative solutions to ensure your project's success.`
    //                     }
    //                 ]
    //             ]
    //         },
    //         {
    //             type: 'text',
    //             value: `Contact us today to explore how our AR VR XR solutions can elevate your brand and drive results!`
    //         },
    //     ],
    //     idx: 2
    // },
    // {
    //     title: 'Digital Marketing',
    //     colapse: [
    //         {
    //             type: 'bold',
    //             value: 'Amplify Your Brand with Digital Marketing Excellence'
    //         },
    //         {
    //             type: 'list',
    //             value: [
    //                 [
    //                     {
    //                         type: 'bold',
    //                         value: 'Comprehensive Approach:'
    //                     },
    //                     {
    //                         type: 'text',
    //                         value: `From SEO to social media, we handle everything, providing a seamless experience.`
    //                     }
    //                 ],
    //                 [
    //                     {
    //                         type: 'bold',
    //                         value: 'Increase Visibility by 70%:'
    //                     },
    //                     {
    //                         type: 'text',
    //                         value: 'Our targeted campaigns ensure your brand reaches the right audience, increasing your online presence significantly.'
    //                     }
    //                 ],
    //                 [
    //                     {
    //                         type: 'bold',
    //                         value: 'Cutting-Edge Strategies:'
    //                     },
    //                     {
    //                         type: 'text',
    //                         value: `Utilizing the latest in analytics, AI, and automation, we optimize every campaign for maximum ROI.`
    //                     }
    //                 ],
    //                 [
    //                     {
    //                         type: 'bold',
    //                         value: 'Expert Team:'
    //                     },
    //                     {
    //                         type: 'text',
    //                         value: `With over 10 years of industry experience, our skilled professionals are dedicated to driving your success.`
    //                     }
    //                 ],
    //                 [
    //                     {
    //                         type: 'bold',
    //                         value: `Don't Get Left Behind:`
    //                     },
    //                     {
    //                         type: 'text',
    //                         value: `The digital landscape is evolving fast. Stay ahead of your competitors with our innovative solutions.`
    //                     }
    //                 ]
    //             ]
    //         },
    //         {
    //             type: 'text',
    //             value: `Ready to take your brand to the next level? Contact us today and watch your growth soar!`
    //         },
    //     ],
    //     idx: 3
    // },
    // {
    //     title: 'Video Production',
    //     colapse: [
    //         {
    //             type: 'bold',
    //             value: 'Our bespoke video production service offers tailored solutions to help your brand shine'
    //         },
    //         {
    //             type: 'list',
    //             value: [
    //                 [
    //                     {
    //                         type: 'bold',
    //                         value: 'Customized Creations:'
    //                     },
    //                     {
    //                         type: 'text',
    //                         value: `From captivating brand stories to immersive product showcases, we craft unique videos that resonate with your audience and drive engagement.`
    //                     }
    //                 ],
    //                 [
    //                     {
    //                         type: 'bold',
    //                         value: 'Maximize Engagement:'
    //                     },
    //                     {
    //                         type: 'text',
    //                         value: 'Our videos have been shown to increase viewer retention by up to 80%, capturing attention and inspiring action like never before.'
    //                     }
    //                 ],
    //                 [
    //                     {
    //                         type: 'bold',
    //                         value: 'Cutting-Edge Techniques:'
    //                     },
    //                     {
    //                         type: 'text',
    //                         value: `Using state-of-the-art equipment and innovative editing methods, we ensure your videos stand out with stunning visuals and professional quality.`
    //                     }
    //                 ],
    //                 [
    //                     {
    //                         type: 'bold',
    //                         value: 'Expert Team:'
    //                     },
    //                     {
    //                         type: 'text',
    //                         value: `Our team of experienced filmmakers, editors, and creative directors collaborate closely with you to bring your vision to life, delivering exceptional results that exceed expectations.`
    //                     }
    //                 ]
    //             ]
    //         },
    //         {
    //             type: 'text',
    //             value: `Don't settle for ordinary! Contact us today to discuss your project and discover the power of personalized video solutions!`
    //         },
    //     ],
    //     idx: 4
    // }
]

export default servicesData