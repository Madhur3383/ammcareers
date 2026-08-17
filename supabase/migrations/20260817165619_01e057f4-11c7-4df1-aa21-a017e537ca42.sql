CREATE TABLE public.consultation_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  role TEXT NOT NULL,
  experience TEXT,
  duration TEXT,
  locations TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.consultation_requests TO anon, authenticated;
GRANT ALL ON public.consultation_requests TO service_role;

ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a consultation request"
  ON public.consultation_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);