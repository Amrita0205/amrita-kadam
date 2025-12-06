import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            Designed & Built with <Heart size={14} className="text-primary" /> by{" "}
            <span className="text-foreground font-medium">Amrita Kadam</span>
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">© 2024 All Rights Reserved</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
