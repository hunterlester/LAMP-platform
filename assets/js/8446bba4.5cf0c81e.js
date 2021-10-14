(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{238:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),o=n(8),r=(n(0),n(388)),i=["components"],s={},c={unversionedId:"deploy/aws",id:"deploy/aws",isDocsHomePage:!1,title:"Preparing Resources on AWS",description:"The following instructions will result in a Docker Swarm setup prepared to deploy LAMP. You will need to continue following the instructions after this phase to successfully configure LAMP.",source:"@site/docs/07-deploy/05-aws.md",sourceDirName:"07-deploy",slug:"/deploy/aws",permalink:"/deploy/aws",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-deploy/05-aws.md",version:"current",lastUpdatedBy:"Suraj Patel",lastUpdatedAt:1634236935,formattedLastUpdatedAt:"10/14/2021",sidebarPosition:5,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Provisioning the LAMP Platform",permalink:"/deploy/provisioning"},next:{title:"Deploying via CloudFormation",permalink:"/deploy/cloudformation"}},l=[{value:"For EC2 Instances Only:",id:"for-ec2-instances-only",children:[]},{value:"EC2 Commands",id:"ec2-commands",children:[]},{value:"AWS SSM Instructions",id:"aws-ssm-instructions",children:[]},{value:"Using AWS DocumentDB instead of MongoDB (Coming Soon)",id:"using-aws-documentdb-instead-of-mongodb-coming-soon",children:[]}],u={toc:l};function m(e){var t=e.components,s=Object(o.a)(e,i);return Object(r.b)("wrapper",Object(a.a)({},u,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The following instructions will result in a Docker Swarm setup prepared to deploy LAMP. You will need to continue following the instructions after this phase to successfully configure LAMP."),Object(r.b)("p",null,Object(r.b)("img",{src:n(6209).default})),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Digital Psychiatry's AWS Network Diagram for the LAMP Platform")),Object(r.b)("h3",{id:"for-ec2-instances-only"},"For EC2 Instances Only:"),Object(r.b)("p",null,"A ",Object(r.b)("strong",{parentName:"p"},"HARD")," requirement for the successful operation of the LAMP Platform is the use of a high performance SSD volume. For more information on these hard limitations and requirements, ",Object(r.b)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/administration/production-notes/"},"see the MongoDB documentation here.")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Required maximum (saturable) disk bandwidth: ",Object(r.b)("inlineCode",{parentName:"li"},"4750 Mbps")),Object(r.b)("li",{parentName:"ol"},"Required maximum disk throughput: ",Object(r.b)("inlineCode",{parentName:"li"},"593.75 MB/s")),Object(r.b)("li",{parentName:"ol"},"Required maximum disk I/O operations: ",Object(r.b)("inlineCode",{parentName:"li"},"20000 IOPS")),Object(r.b)("li",{parentName:"ol"},"Required minimum disk throughput: ",Object(r.b)("inlineCode",{parentName:"li"},"125 MB/s")),Object(r.b)("li",{parentName:"ol"},"Required minimum disk I/O operations: ",Object(r.b)("inlineCode",{parentName:"li"},"3000 IOPS")),Object(r.b)("li",{parentName:"ol"},"Required minimum disk space: ",Object(r.b)("inlineCode",{parentName:"li"},"64 GB"))),Object(r.b)("p",null,"If using AWS, provisioning a DocumentDB cluster is the simplest way to achieve these baseline requirements for efficient and accurate data collection with no database outages or upload rejections. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"You must replace the value of ",Object(r.b)("inlineCode",{parentName:"strong"},"MY_DNS_NAME")," in the commands below.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-markdown"},' 1. Create an EC2 instance.\n                -> AMI: AWS Linux 2\n                -> Instance Type: [MINIMUM] t2.medium\n                -> Create a new IAM role with the `AmazonSSMManagedInstanceCore` policy.\n                -> Enable termination protection.\n                -> Create a [RECOMMENDED] 1TB EBS volume WITH encryption enabled.\n                -> Configure security group:\n                        -> HTTP: TCP 80 from anywhere\n                        -> HTTPS: TCP 443 from anywhere\n                        -> Docker Daemon: TCP 2375 from this Security Group\n                        -> Docker Machine: TCP 2376 from this Security Group\n                        -> Docker Swarm: TCP 2377 from this Security Group\n                        -> Docker Swarm: TCP 7946 from this Security Group\n                        -> Docker Swarm: UDP 7946 from this Security Group\n                        -> Docker Overlay: UDP 4789 from this Security Group\n                -> Create a new key pair and keep it private.\n                -> Allocate and assign an elastic IP to the instance.\n 2. Run the following commands in the instance.\n                sudo yum -y update && sudo yum -y install docker -y\n                sudo usermod -a -G docker ec2-user\n                sudo hostnamectl set-hostname <MY_DNS_NAME>\n                sudo printf "[Service]\\nExecStart=\\nExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H fd:// --containerd=/run/containerd/containerd.sock\\n" | sudo tee /etc/systemd/system/docker.service.d/override.conf\n                sudo systemctl daemon-reload && sudo service docker restart\n                sudo docker swarm init\n 3. Create your DNS binding in Route53.\n')),Object(r.b)("h3",{id:"ec2-commands"},"EC2 Commands"),Object(r.b)("p",null,"The following is a set of bash commands to be used from within AWS Systems Manager once a new EC2 instance and EBS volume are created with the AWS SSM IAM role."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"DO NOT USE THIS AS A SCRIPT!\nTHOROUGHLY READ IT AND RUN EACH COMMAND INDIVIDUALLY!\nSUBSTITUTE ALL VARIABLES BEFORE CONTINUING!")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'# Assumes nvme1n1 is the name of the EBS volume. \n# Use lsblk to confirm this before running the script.\n\n# Attach EBS volume and configure auto-reattach on restart.\nmkfs -t xfs /dev/nvme1n1\nmkdir /data && mount /dev/nvme1n1 /data\nprintf "\\nUUID=$(blkid -s UUID -o value /dev/nvme1n1)     /data       xfs    defaults,nofail   0   2" >> /etc/fstab\numount /data && mount -a\n\n# Install Docker and move Docker root to EBS volume.\nyum install docker\nmkdir -p /data/var/lib/docker && ln -s /data/var/lib/docker /var/lib/docker\n\n# Set hostname before starting Docker and join the Swarm.\nhostnamectl set-hostname node-01.example.com\nservice docker start\ndocker swarm join --token SWARM_TOKEN IP_ADDR:2377\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"In case your EBS volume runs out of storage space, follow the instructions below:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# expand the EBS volume using the AWS management console first\nlsblk\ngrowpart /dev/nvme1n1 1\nxfs_growfs -d /data\n")),Object(r.b)("h3",{id:"aws-ssm-instructions"},"AWS SSM Instructions"),Object(r.b)("p",null,"We recommend disabling all SSH (port 22) or remote access to any EC2 instances you configure. ",Object(r.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-sessions-start.html#start-ec2-console"},"Use AWS Systems Session Manager (AWS SSM) to access your node.")," Additionally, follow the instructions below on your local computer to securely communicate with the instance(s)."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html"},"Install the AWS CLI SSM plugin."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-getting-started-enable-ssh-connections.html"},"Configure SSH to support AWS SSM tunneling."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Alternatively, manually open a port forwarding tunnel."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},'aws ssm start-session \\\n    --target $(aws ec2 describe-instances \\\n        --filter "Name=tag:Name,Values=node-01" \\\n        --query "Reservations[].Instances[?State.Name == \'running\'].InstanceId[]" \\\n        --output text) \\\n    --document-name AWS-StartPortForwardingSession \\\n    --parameters \'{ "portNumber": ["22"], "localPortNumber": ["9999"] }\'\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Alternatively, manually open a secure SSH tunnel session."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"aws ssm start-session \\\n    --target $(aws ec2 describe-instances \\\n        --filter \"Name=tag:Name,Values=node-01\" \\\n        --query \"Reservations[].Instances[?State.Name == 'running'].InstanceId[]\" \\\n        --output text) \\\n    --document-name AWS-StartSSHSession \\\n    --parameters 'portNumber=%p'\n")))),Object(r.b)("h3",{id:"using-aws-documentdb-instead-of-mongodb-coming-soon"},"Using AWS DocumentDB instead of MongoDB (Coming Soon)"),Object(r.b)("p",null,"The Division of Digital Psychiatry has been working closely with Solutions Architects at Amazon Web Services (AWS) to improve performance and reliability, as well as reduce maintenance overhead and IT skills required for deployment. For this reason, we support MongoDB in addition to the Apache CouchDB database. AWS offers a managed solution for MongoDB databases called DocumentDB that abstracts and simplifies all MongoDB database setup and operations needs, including routine backups and HIPAA-compliant encryption of data at rest and in transit. "),Object(r.b)("p",null,"DocumentDB is a high performance database solution built on the AWS Aurora technology that supports global replicated clusters that span across multiple regions (i.e. U.S. East and Mumbai, for example) and up to 15 read replicas in a single region. This provides high availability and performance for the LAMP API and in turn the clinical dashboard and mobile apps that are built upon it. "),Object(r.b)("p",null,"This advanced technology and other AWS managed solutions are natively integrated into the LAMP Platform and the Cortex data analysis toolkit, enabling both advanced clinical care management features (such as just-in-time adaptive interventions) and advanced research/data analysis methods. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"We are working closely with Amazon Web Services (AWS) to bring this feature to all organizations using the LAMP Platform. If you or your organization are interested, please contact us.")))}m.isMDXComponent=!0},388:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,b=m["".concat(i,".").concat(p)]||m[p]||d[p]||r;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6209:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Untitled_AWS-254a3f4cb9e9716d707ff407b7ca3969.png"}}]);