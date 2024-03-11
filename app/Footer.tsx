import React from "react";

const Footer = () => {
  return (
		<div id="footer" className="w-full bg-pink border-t border-black">
			<div className="max-w-[1000px] m-auto px-2 w-full pt-20">
				<div className="m-5 flex flex-col md:flex-row justify-between items-center md:items-start">
					<h3 className="text-5xl text-center md:text-left lg:text-6xl">
						Get in touch
					</h3>
					<div className="flex md:flex-row flex-col items-center text-center md:items-start md:text-left">
						<div className="px-10 my-4 md:my-0">
							<p className="text-xl font-heading font-[500] py-5">
								Find me online
							</p>
							<ul>
								<li className="py-1 hover:underline">
									<a
										href="https://www.linkedin.com/in/katmountford/"
										target="_blank"
									>
										LinkedIn
									</a>
								</li>
								<li className="py-1 hover:underline">
									<a
										href="https://github.com/kvtrice"
										target="_blank"
									>
										Github
									</a>
								</li>
								<li className="py-1 hover:underline">
									<a
										href="mailto:katricemountford@gmail.com"
										target="_blank"
									>
										Email
									</a>
								</li>
							</ul>
						</div>
						<div className="px-10">
							<p className="text-xl font-heading font-[500] py-5">
								Projects
							</p>
							<ul>
								<li className="py-1 hover:underline">
									<a
										href="https://sproutlyapp.vercel.app"
										target="_blank"
									>
										Sproutly
									</a>
								</li>
								<li className="py-1 hover:underline">
									<a href="/talktomaple">Talk to Maple</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<p className="pt-20 pb-20 ml-5 text-center md:text-left text-sm font-heading">
					&#169; Katrice Mountford 2024
				</p>
			</div>
		</div>
  );
};

export default Footer;
