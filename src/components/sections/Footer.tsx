import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 poppins">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Top section */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Logo + description */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <img src="/images/logo.png" alt="DevKit logo" className="w-40 h-16" />
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Secure APIs and SDKs on your data — without running a backend.
            </p>
          </div>

          {/* Links */}
          <div className="grid gap-8 sm:grid-cols-2 md:col-span-3 md:grid-cols-3">
            {/* Resources */}
            <div>
              <h4 className="mb-3 text-sm font-medium text-neutral-900 dark:text-white">
                Resources
              </h4>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>
                  <Link to="/docs" className="hover:text-sky-500">
                    Docs
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/your-org/devkit"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-sky-500"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <Link to="/security" className="hover:text-sky-500">
                    Security
                  </Link>
                </li>
                <li>
                  <Link to="/roadmap" className="hover:text-sky-500">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <a
                    href="https://status.devkit.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-sky-500"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="mb-3 text-sm font-medium text-neutral-900 dark:text-white">
                Legal
              </h4>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>
                  <Link to="/privacy" className="hover:text-sky-500">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-sky-500">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/security" className="hover:text-sky-500">
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-3 text-sm font-medium text-neutral-900 dark:text-white">
                Contact
              </h4>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>
                  <Link to="/contact" className="hover:text-sky-500">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:support@devkit.com"
                    className="hover:text-sky-500"
                  >
                    support@devkit.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-sm dark:border-neutral-800 md:flex-row">
          <p className="text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} DevKit. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-sky-500">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-sky-500">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
