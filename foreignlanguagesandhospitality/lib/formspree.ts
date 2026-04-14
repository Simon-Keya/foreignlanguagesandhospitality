// src/lib/formspree.ts

export const FORMSPREE_ENDPOINTS = {
    // Main contact form
    contact: process.env.NEXT_PUBLIC_FORMSPREE_CONTACT || '',
    
    // Admissions form
    admissions: process.env.NEXT_PUBLIC_FORMSPREE_ADMISSIONS || '',
    
    // General inquiry
    general: process.env.NEXT_PUBLIC_FORMSPREE_GENERAL || '',
  } as const;
  
  export interface FormspreeResponse {
    ok: boolean;
    status: number;
    message?: string;
  }
  
  // Helper to submit form to Formspree
  export async function submitToFormspree(
    endpoint: string,
    data: Record<string, any>
  ): Promise<FormspreeResponse> {
    if (!endpoint) {
      throw new Error('Formspree endpoint is not configured');
    }
  
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...data,
        _subject: data.subject || 'New Form Submission from IIFLHM Website',
      }),
    });
  
    return {
      ok: response.ok,
      status: response.status,
      message: response.ok ? 'Success' : 'Failed to submit form',
    };
  }