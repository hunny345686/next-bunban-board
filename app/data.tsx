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
  NextJS: {
    backlog: {
      id: "backlog",
      title: "Backlog",
      items: [{ id: "next-task-1", title: "Learn Next.js Routing" }],
    },
    inprogress: {
      id: "inprogress",
      title: "In Progress",
      items: [{ id: "next-task-2", title: "Build a Next.js Kanban App" }],
    },
    done: { id: "done", title: "Done", items: [] },
  },
  GenAI: {
    backlog: {
      id: "backlog",
      title: "Backlog",
      items: [{ id: "genai-task-1", title: "Learn Prompt Engineering" }],
    },
    inprogress: {
      id: "inprogress",
      title: "In Progress",
      items: [{ id: "genai-task-2", title: "Implement OpenAI API in Next.js" }],
    },
    done: { id: "done", title: "Done", items: [] },
  },
};
