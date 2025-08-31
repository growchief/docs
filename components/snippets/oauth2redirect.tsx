import type { ReactElement } from 'react';

type OAuth2RedirectProps = {
	provider?: string
}

export default function OAuth2Redirect({
	provider,
}: OAuth2RedirectProps): ReactElement {
  return <div>
  	<br />
  	<p>
	The OAuth2 Redirect URI is the location where the provider will redirect to after trying to login. This needs to set to your GrowChief <code className = "nextra-code">FRONTEND_URL</code> + <code className = "nextra-code">/integrations/social/</code> + <code className = "nextra-code">{provider}</code>.
	</p>

	<ul className = "[:is(ol,ul)_&]:_my-3 [&:not(:first-child)]:_mt-6 _list-disc ltr:_ml-6 rtl:_mr-6">
		<li>eg: If you are running on a container, and your GrowChief URL is: <code className = "nextra-code">https://growchief.example.com</code>, then your OAuth2 Redirect URI is <code className = "nextra-code">https://growchief.example.com/integrations/social/{provider}</code></li>
		<li>eg: If you are running on localhost, and your GrowChief URL is <code className = "nextra-code">http://localhost:4200</code>, then your OAuth2 Redirect URI is <code className = "nextra-code">http://localhost:4200/integrations/social/{provider}</code></li>
		<li>eg: If you are running on localhost, and the provider doesn't accept http uris, and your GrowChief URL is <code className = "nextra-code">http://localhost:4200</code>, then your OAuth2 Redirect URI is <code className = "nextra-code">https://redirectmeto.com/http://localhost:4200/integrations/social/{provider}</code></li>
	</ul>

	<br />

	<p>
	You only need to set one OAuth2 Redirect URI when you are setting up your GrowChief app.
	</p>
  </div>;
}
