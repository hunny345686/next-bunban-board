export const defaultTemplates = {
  AWS: {
    backlog: {
      id: "backlog",
      title: "Backlog",
      items: [
        {
          id: "aws-week-1",
          title: "Week 1: AWS Overview & Global Infrastructure",
          desc: "Understand the AWS global network, regions, and availability zones.",
          keyPoints: [
            "AWS global infrastructure",
            "Regions vs Availability Zones",
            "Edge Locations & CloudFront basics",
          ],
          resources: [
            {
              type: "AWS Docs",
              link: "https://aws.amazon.com/about-aws/global-infrastructure/",
            },
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=ubCNZRNjhyo",
            },
          ],
        },
        {
          id: "aws-week-2",
          title: "Week 2: IAM & Security Basics",
          desc: "Learn Identity & Access Management for secure AWS access.",
          keyPoints: [
            "IAM users, groups, roles, and policies",
            "MFA setup",
            "Best practices for security",
          ],
          resources: [
            {
              type: "AWS Docs",
              link: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html",
            },
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=UlYh_Qz8GmM",
            },
          ],
        },
        {
          id: "aws-week-3",
          title: "Week 3: S3 - Simple Storage Service",
          desc: "Learn object storage, bucket configuration, and policies.",
          keyPoints: [
            "Creating buckets",
            "Public vs Private access",
            "Lifecycle policies",
          ],
          resources: [
            {
              type: "AWS Docs",
              link: "https://docs.aws.amazon.com/s3/index.html",
            },
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=oya4ZvDXfSY",
            },
          ],
        },
        {
          id: "aws-week-4",
          title: "Week 4: CloudFront & CDN",
          desc: "Learn content delivery optimization with AWS CloudFront.",
          keyPoints: ["Distributions", "Caching", "Integration with S3"],
          resources: [
            {
              type: "AWS Docs",
              link: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html",
            },
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=0vq6XnqLz5g",
            },
          ],
        },
        {
          id: "aws-week-5",
          title: "Week 5: EC2 Basics",
          desc: "Learn to launch, configure, and connect to EC2 instances.",
          keyPoints: [
            "Launch EC2 instances",
            "Key pairs & SSH",
            "Security groups",
          ],
          resources: [
            {
              type: "AWS Docs",
              link: "https://docs.aws.amazon.com/ec2/index.html",
            },
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=Ub4ojt7oFEE",
            },
          ],
        },
        {
          id: "aws-week-6",
          title: "Week 6: Load Balancing & Auto Scaling",
          desc: "Distribute traffic and automatically scale resources.",
          keyPoints: [
            "Elastic Load Balancer",
            "Auto Scaling Groups",
            "Scaling policies",
          ],
          resources: [
            {
              type: "AWS Docs",
              link: "https://docs.aws.amazon.com/autoscaling/index.html",
            },
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=rSDoB10N7eA",
            },
          ],
        },
        {
          id: "aws-week-7",
          title: "Week 7: AWS Lambda & Serverless",
          desc: "Learn to run code without managing servers.",
          keyPoints: [
            "Creating Lambda functions",
            "Triggers",
            "Integration with API Gateway",
          ],
          resources: [
            {
              type: "AWS Docs",
              link: "https://docs.aws.amazon.com/lambda/index.html",
            },
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=eOBq__h4OJ4",
            },
          ],
        },
        {
          id: "aws-week-8",
          title: "Week 8: API Gateway",
          desc: "Learn to create and manage APIs in AWS.",
          keyPoints: [
            "REST API creation",
            "Integration with Lambda",
            "Authentication",
          ],
          resources: [
            {
              type: "AWS Docs",
              link: "https://docs.aws.amazon.com/apigateway/index.html",
            },
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=6yLXhBjKO6E",
            },
          ],
        },
        {
          id: "aws-week-9",
          title: "Week 9: Databases - DynamoDB & RDS",
          desc: "Learn AWS database services for structured and unstructured data.",
          keyPoints: ["DynamoDB basics", "RDS setup", "Performance tuning"],
          resources: [
            {
              type: "AWS Docs",
              link: "https://docs.aws.amazon.com/dynamodb/index.html",
            },
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=5WbMMyJ7J0Q",
            },
          ],
        },
        {
          id: "aws-week-10",
          title: "Week 10: Monitoring & Logging",
          desc: "Monitor resources using CloudWatch and CloudTrail.",
          keyPoints: ["Metrics & alarms", "Log groups", "EventBridge basics"],
          resources: [
            {
              type: "AWS Docs",
              link: "https://docs.aws.amazon.com/cloudwatch/index.html",
            },
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=RHHR1DMPW4I",
            },
          ],
        },
        {
          id: "aws-week-11",
          title: "Week 11: Messaging Services",
          desc: "Learn to use SNS & SQS for communication between services.",
          keyPoints: ["SNS topics", "SQS queues", "Integration with Lambda"],
          resources: [
            {
              type: "AWS Docs",
              link: "https://docs.aws.amazon.com/sns/index.html",
            },
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=ncqfGikic0Q",
            },
          ],
        },
        {
          id: "aws-week-12",
          title: "Week 12: AWS Security & Final Project",
          desc: "Apply security best practices and build a final AWS project.",
          keyPoints: [
            "Security auditing",
            "Cost optimization",
            "Deploying a complete app",
          ],
          resources: [
            {
              type: "AWS Docs",
              link: "https://aws.amazon.com/architecture/security-identity-compliance/",
            },
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=JIbIYCM48to",
            },
          ],
        },
      ],
    },
    inprogress: {
      id: "inprogress",
      title: "In Progress",
      items: [],
    },
    done: {
      id: "done",
      title: "Done",
      items: [],
    },
  },
  GenAI: {
    backlog: {
      id: "backlog",
      title: "Backlog",
      items: [
        {
          id: "genai-week-1",
          title: "Week 1: LLM Basics & API Calls",
          desc: "Learn the fundamentals of Large Language Models (LLMs) and how to make API calls from frontend apps.",
          keyPoints: [
            "What are LLMs and how they work",
            "Transformers architecture basics",
            "Using OpenAI API for text generation",
          ],
          resources: [
            {
              type: "Docs",
              link: "https://platform.openai.com/docs/quickstart",
            },
            {
              type: "Article",
              link: "https://huggingface.co/course/chapter1/1",
            },
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=4Bdc55j80l8",
            },
            {
              type: "Starter Code",
              link: "https://github.com/vercel/examples/tree/main/ai",
            },
          ],
        },
        {
          id: "genai-week-2",
          title: "Week 2: Prompt Engineering 101",
          desc: "Master prompt engineering techniques to get better and more consistent outputs from AI models.",
          keyPoints: [
            "Zero-shot, few-shot prompting",
            "Chain-of-thought prompts",
            "Role-based prompting for better results",
          ],
          resources: [
            { type: "Guide", link: "https://www.promptingguide.ai/" },
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=jHv2Y4TQZJY",
            },
            {
              type: "Starter Code",
              link: "https://github.com/mayooear/gpt4-pdf-chatbot-langchain",
            },
          ],
        },
        {
          id: "genai-week-3",
          title: "Week 3: AI Image Generation",
          desc: "Learn how to generate images using DALL·E and Stable Diffusion APIs.",
          keyPoints: [
            "DALL·E image generation",
            "Stable Diffusion basics",
            "Prompt tuning for image quality",
          ],
          resources: [
            {
              type: "Docs",
              link: "https://platform.openai.com/docs/guides/images",
            },
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=Z5dHZX6k5Vc",
            },
            {
              type: "Starter Code",
              link: "https://github.com/adrianhajdin/project_ai_image_generator",
            },
          ],
        },
        {
          id: "genai-week-4",
          title: "Week 4: Speech-to-Text & Text-to-Speech",
          desc: "Integrate voice capabilities into your AI apps with Whisper and ElevenLabs APIs.",
          keyPoints: [
            "Speech-to-text with Whisper",
            "Text-to-speech with ElevenLabs",
            "Voice-controlled AI experiences",
          ],
          resources: [
            {
              type: "Docs",
              link: "https://platform.openai.com/docs/guides/speech-to-text",
            },
            { type: "Docs", link: "https://docs.elevenlabs.io/" },
            {
              type: "Starter Code",
              link: "https://github.com/react-speech-kit/react-speech-kit",
            },
          ],
        },
        {
          id: "genai-week-5",
          title: "Week 5: Chatbot with Memory",
          desc: "Build a chatbot that remembers previous messages using LangChain.js memory features.",
          keyPoints: [
            "LangChain.js memory module",
            "Storing conversation history",
            "Maintaining context across chats",
          ],
          resources: [
            {
              type: "Docs",
              link: "https://js.langchain.com/docs/modules/memory",
            },
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=1x7xS8XZ9j8",
            },
            {
              type: "Starter Code",
              link: "https://github.com/mckaywrigley/chatbot-ui",
            },
          ],
        },
        {
          id: "genai-week-6",
          title: "Week 6: Retrieval-Augmented Generation (RAG)",
          desc: "Make AI answer from your documents by combining embeddings with vector databases.",
          keyPoints: [
            "What is RAG",
            "Creating embeddings",
            "Pinecone integration with LangChain",
          ],
          resources: [
            { type: "Docs", link: "https://docs.pinecone.io/docs/langchain" },
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=ih9PBGVVOO4",
            },
            {
              type: "Starter Code",
              link: "https://github.com/mayooear/gpt4-pdf-chatbot-langchain",
            },
          ],
        },
        {
          id: "genai-week-7",
          title: "Week 7: AI Code Assistant",
          desc: "Use AI to generate and explain code for frontend development tasks.",
          keyPoints: [
            "Using GPT for code generation",
            "Code syntax highlighting",
            "Live code preview",
          ],
          resources: [
            {
              type: "Docs",
              link: "https://platform.openai.com/docs/guides/code",
            },
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=V9X1dckL1oA",
            },
            {
              type: "Starter Code",
              link: "https://github.com/suren-atoyan/monaco-react",
            },
          ],
        },
        {
          id: "genai-week-8",
          title: "Week 8: AI Image Editing",
          desc: "Use AI to edit, enhance, and transform images via inpainting and DALL·E editing.",
          keyPoints: [
            "DALL·E editing API",
            "Image inpainting with Stability AI",
            "User-selected image regions",
          ],
          resources: [
            {
              type: "Docs",
              link: "https://platform.openai.com/docs/guides/images/edits",
            },
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=9OCHNwF7Qhs",
            },
            {
              type: "Starter Code",
              link: "https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss",
            },
          ],
        },
        {
          id: "genai-week-9",
          title: "Week 9: Multimodal AI",
          desc: "Combine text and image inputs using GPT-4o and other multimodal models.",
          keyPoints: [
            "What is multimodal AI",
            "CLIP model basics",
            "GPT-4o image + text processing",
          ],
          resources: [
            {
              type: "Docs",
              link: "https://platform.openai.com/docs/guides/vision",
            },
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=I9Z8Jc_q2Dg",
            },
            {
              type: "Starter Code",
              link: "https://github.com/vercel/next.js/tree/canary/examples/with-upload",
            },
          ],
        },
        {
          id: "genai-week-10",
          title: "Week 10: AI Video Generation",
          desc: "Generate product videos from text descriptions using RunwayML or Pika Labs.",
          keyPoints: [
            "RunwayML basics",
            "Pika Labs text-to-video",
            "Integrating AI video into apps",
          ],
          resources: [
            { type: "Docs", link: "https://docs.runwayml.com/" },
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=U3JY2_0EuJg",
            },
            {
              type: "Starter Code",
              link: "https://github.com/codedamn/React-Video-Player",
            },
          ],
        },
        {
          id: "genai-week-11",
          title: "Week 11: AI SaaS Architecture",
          desc: "Learn to build scalable AI SaaS products with authentication, payments, and usage tracking.",
          keyPoints: [
            "Stripe payment integration",
            "Auth & user management",
            "API rate limiting",
          ],
          resources: [
            {
              type: "Docs",
              link: "https://stripe.com/docs/payments/quickstart",
            },
            {
              type: "Docs",
              link: "https://www.npmjs.com/package/express-rate-limit",
            },
            {
              type: "Starter Code",
              link: "https://github.com/ixartz/Next-js-Boilerplate",
            },
          ],
        },
        {
          id: "genai-week-12",
          title: "Week 12: Deployment & Portfolio",
          desc: "Deploy your AI projects and create a portfolio to showcase them.",
          keyPoints: [
            "Deploy AI apps on Vercel",
            "Write case studies for projects",
            "Showcase AI apps in a portfolio website",
          ],
          resources: [
            { type: "Docs", link: "https://vercel.com/docs" },
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=F2Y6NRX_6-k",
            },
            {
              type: "Starter Code",
              link: "https://github.com/surajsaple/nextjs-developer-portfolio",
            },
          ],
        },
      ],
    },
    inprogress: {
      id: "inprogress",
      title: "In Progress",
      items: [],
    },
    done: { id: "done", title: "Done", items: [] },
  },
};
