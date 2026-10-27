import medicalImg from '../assets/images/medical_vascular_portal_1793117726547.jpg';
import watchesImg from '../assets/images/luxury_watches_store_1793117752446.jpg';
import roofingImg from '../assets/images/roofing_contractor_site_1793117775968.jpg';
import securityImg from '../assets/images/nightowl_security_portal_1793117801427.jpg';

export interface ProjectVisual {
  image?: string;
  badge?: string;
  hasCustomScreenshot: boolean;
}

export const PROJECT_VISUAL_MAP: Record<number, string> = {
  1: roofingImg,     // Clean Roofing
  5: medicalImg,     // Vein and Knee Pain Vascular Group
  6: securityImg,    // Night Owl Monitoring
  88: watchesImg,    // Crysma Watches (Shopify)
};

export function getProjectScreenshot(id: number): string | null {
  return PROJECT_VISUAL_MAP[id] || null;
}
