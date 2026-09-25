import {
    createFileRoute,
    useNavigate,
  } from "@tanstack/react-router";
  
  import { useState } from "react";
  
  import { PageShell } from "@/components/site/Layout";
  
  import {
    requestDeepReviewAccessCode,
    verifyDeepReviewAccessCode,
  } from "@/lib/deepReviewAccess.functions";
  
  export const Route = createFileRoute(
    "/deep-review-payment-return"
  )({
    head: () => ({
      meta: [
        {
          title:
            "Verify Your Deep Review | Dr. Ruth Mwongeli Muthoka",
        },
        {
          name: "robots",
          content: "noindex, nofollow",
        },
      ],
    }),
  
    headers: () => ({
      "Cache-Control":
        "private, no-store",
    }),
  
    component: DeepReviewPaymentReturn,
  });
  
  function DeepReviewPaymentReturn() {
    const navigate = useNavigate();
  
    const [email, setEmail] =
      useState("");
  
    const [code, setCode] =
      useState("");
  
    const [codeSent, setCodeSent] =
      useState(false);
  
    const [loading, setLoading] =
      useState(false);
  
    const [message, setMessage] =
      useState("");
  
    async function handleEmailSubmit(
      event: React.FormEvent<HTMLFormElement>
    ) {
      event.preventDefault();
  
      setLoading(true);
      setMessage("");
  
      try {
        const result =
          await requestDeepReviewAccessCode({
            data: {
              email,
            },
          });
  
        if (!result.success) {
          setMessage(result.message);
          return;
        }
  
        setCodeSent(true);
  
        setMessage(
          "A 6-digit verification code has been sent to the email address used for your Deep Review payment."
        );
      } catch {
        setMessage(
          "We could not verify your payment right now. Please try again."
        );
      } finally {
        setLoading(false);
      }
    }
  
    async function handleCodeSubmit(
      event: React.FormEvent<HTMLFormElement>
    ) {
      event.preventDefault();
  
      setLoading(true);
      setMessage("");
  
      try {
        const result =
          await verifyDeepReviewAccessCode({
            data: {
              code,
            },
          });
  
        if (!result.success) {
          setMessage(result.message);
          return;
        }
  
        await navigate({
          to: "/deep-review-confirmation",
        });
      } catch {
        setMessage(
          "We could not verify the code. Please try again."
        );
      } finally {
        setLoading(false);
      }
    }
  
    return (
      <PageShell>
        <section className="bg-white text-[#5b453e]">
          <div className="mx-auto w-full max-w-[720px] px-6 py-20 sm:px-10 lg:py-24">
  
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.04em] text-[#5b453e]/70">
                Payment verification
              </p>
  
              <h1 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl">
                Confirm your Deep Review
              </h1>
  
              <p className="mx-auto mt-5 max-w-[600px] text-base leading-[1.7] text-[#5b453e]/80">
                Enter the same email address
                you used when completing your
                Deep Review payment on Whop.
              </p>
            </div>
  
            <div className="mt-10 rounded-2xl border border-[#5b453e]/15 bg-[#faf8f4] p-6 shadow-sm sm:p-8">
  
              {!codeSent ? (
                <form
                  onSubmit={
                    handleEmailSubmit
                  }
                  className="space-y-5"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-bold"
                    >
                      Email address
                    </label>
  
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(event) =>
                        setEmail(
                          event.target.value
                        )
                      }
                      className="mt-2 w-full rounded-lg border border-[#5b453e]/20 bg-white px-4 py-3 outline-none focus:border-[#5b453e]"
                      placeholder="you@example.com"
                    />
                  </div>
  
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg bg-[#5b453e] px-5 py-3.5 font-bold text-white transition hover:bg-[#493731] disabled:opacity-60"
                  >
                    {loading
                      ? "Checking payment..."
                      : "Verify payment"}
                  </button>
                </form>
              ) : (
                <form
                  onSubmit={
                    handleCodeSubmit
                  }
                  className="space-y-5"
                >
                  <div>
                    <label
                      htmlFor="code"
                      className="text-sm font-bold"
                    >
                      Verification code
                    </label>
  
                    <input
                      id="code"
                      type="text"
                      inputMode="numeric"
                      autoComplete="one-time-code"
                      required
                      maxLength={6}
                      value={code}
                      onChange={(event) =>
                        setCode(
                          event.target.value.replace(
                            /\D/g,
                            ""
                          )
                        )
                      }
                      className="mt-2 w-full rounded-lg border border-[#5b453e]/20 bg-white px-4 py-3 text-center text-2xl tracking-[0.35em] outline-none focus:border-[#5b453e]"
                      placeholder="000000"
                    />
                  </div>
  
                  <button
                    type="submit"
                    disabled={
                      loading ||
                      code.length !== 6
                    }
                    className="w-full rounded-lg bg-[#5b453e] px-5 py-3.5 font-bold text-white transition hover:bg-[#493731] disabled:opacity-60"
                  >
                    {loading
                      ? "Verifying..."
                      : "Continue"}
                  </button>
                </form>
              )}
  
              {message && (
                <p className="mt-5 text-sm leading-[1.6] text-[#5b453e]/80">
                  {message}
                </p>
              )}
  
            </div>
          </div>
        </section>
      </PageShell>
    );
  }